System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2016-12-01',
          endpointPrefix: 'pinpoint',
          signingName: 'mobiletargeting',
          serviceFullName: 'Amazon Pinpoint',
          serviceId: 'Pinpoint',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'pinpoint-2016-12-01',
          signatureVersion: 'v4'
        },
        operations: {
          CreateApp: {
            http: {
              requestUri: '/v1/apps',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                CreateApplicationRequest: {
                  type: 'structure',
                  members: {
                    Name: {},
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    }
                  },
                  required: ['Name']
                }
              },
              required: ['CreateApplicationRequest'],
              payload: 'CreateApplicationRequest'
            },
            output: {
              type: 'structure',
              members: {
                ApplicationResponse: {
                  shape: 'S6'
                }
              },
              required: ['ApplicationResponse'],
              payload: 'ApplicationResponse'
            }
          },
          CreateCampaign: {
            http: {
              requestUri: '/v1/apps/{application-id}/campaigns',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                WriteCampaignRequest: {
                  shape: 'S8'
                }
              },
              required: ['ApplicationId', 'WriteCampaignRequest'],
              payload: 'WriteCampaignRequest'
            },
            output: {
              type: 'structure',
              members: {
                CampaignResponse: {
                  shape: 'S1l'
                }
              },
              required: ['CampaignResponse'],
              payload: 'CampaignResponse'
            }
          },
          CreateEmailTemplate: {
            http: {
              requestUri: '/v1/templates/{template-name}/email',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                EmailTemplateRequest: {
                  shape: 'S1r'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                }
              },
              required: ['TemplateName', 'EmailTemplateRequest'],
              payload: 'EmailTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                CreateTemplateMessageBody: {
                  shape: 'S1t'
                }
              },
              required: ['CreateTemplateMessageBody'],
              payload: 'CreateTemplateMessageBody'
            }
          },
          CreateExportJob: {
            http: {
              requestUri: '/v1/apps/{application-id}/jobs/export',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                ExportJobRequest: {
                  type: 'structure',
                  members: {
                    RoleArn: {},
                    S3UrlPrefix: {},
                    SegmentId: {},
                    SegmentVersion: {
                      type: 'integer'
                    }
                  },
                  required: ['S3UrlPrefix', 'RoleArn']
                }
              },
              required: ['ApplicationId', 'ExportJobRequest'],
              payload: 'ExportJobRequest'
            },
            output: {
              type: 'structure',
              members: {
                ExportJobResponse: {
                  shape: 'S1x'
                }
              },
              required: ['ExportJobResponse'],
              payload: 'ExportJobResponse'
            }
          },
          CreateImportJob: {
            http: {
              requestUri: '/v1/apps/{application-id}/jobs/import',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                ImportJobRequest: {
                  type: 'structure',
                  members: {
                    DefineSegment: {
                      type: 'boolean'
                    },
                    ExternalId: {},
                    Format: {},
                    RegisterEndpoints: {
                      type: 'boolean'
                    },
                    RoleArn: {},
                    S3Url: {},
                    SegmentId: {},
                    SegmentName: {}
                  },
                  required: ['Format', 'S3Url', 'RoleArn']
                }
              },
              required: ['ApplicationId', 'ImportJobRequest'],
              payload: 'ImportJobRequest'
            },
            output: {
              type: 'structure',
              members: {
                ImportJobResponse: {
                  shape: 'S24'
                }
              },
              required: ['ImportJobResponse'],
              payload: 'ImportJobResponse'
            }
          },
          CreateInAppTemplate: {
            http: {
              requestUri: '/v1/templates/{template-name}/inapp',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                InAppTemplateRequest: {
                  shape: 'S27'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                }
              },
              required: ['TemplateName', 'InAppTemplateRequest'],
              payload: 'InAppTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                TemplateCreateMessageBody: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Message: {},
                    RequestID: {}
                  }
                }
              },
              required: ['TemplateCreateMessageBody'],
              payload: 'TemplateCreateMessageBody'
            }
          },
          CreateJourney: {
            http: {
              requestUri: '/v1/apps/{application-id}/journeys',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                WriteJourneyRequest: {
                  shape: 'S2b'
                }
              },
              required: ['ApplicationId', 'WriteJourneyRequest'],
              payload: 'WriteJourneyRequest'
            },
            output: {
              type: 'structure',
              members: {
                JourneyResponse: {
                  shape: 'S3w'
                }
              },
              required: ['JourneyResponse'],
              payload: 'JourneyResponse'
            }
          },
          CreatePushTemplate: {
            http: {
              requestUri: '/v1/templates/{template-name}/push',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                PushNotificationTemplateRequest: {
                  shape: 'S3y'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                }
              },
              required: ['TemplateName', 'PushNotificationTemplateRequest'],
              payload: 'PushNotificationTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                CreateTemplateMessageBody: {
                  shape: 'S1t'
                }
              },
              required: ['CreateTemplateMessageBody'],
              payload: 'CreateTemplateMessageBody'
            }
          },
          CreateRecommenderConfiguration: {
            http: {
              requestUri: '/v1/recommenders',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                CreateRecommenderConfiguration: {
                  type: 'structure',
                  members: {
                    Attributes: {
                      shape: 'S4'
                    },
                    Description: {},
                    Name: {},
                    RecommendationProviderIdType: {},
                    RecommendationProviderRoleArn: {},
                    RecommendationProviderUri: {},
                    RecommendationTransformerUri: {},
                    RecommendationsDisplayName: {},
                    RecommendationsPerMessage: {
                      type: 'integer'
                    }
                  },
                  required: ['RecommendationProviderUri', 'RecommendationProviderRoleArn']
                }
              },
              required: ['CreateRecommenderConfiguration'],
              payload: 'CreateRecommenderConfiguration'
            },
            output: {
              type: 'structure',
              members: {
                RecommenderConfigurationResponse: {
                  shape: 'S46'
                }
              },
              required: ['RecommenderConfigurationResponse'],
              payload: 'RecommenderConfigurationResponse'
            }
          },
          CreateSegment: {
            http: {
              requestUri: '/v1/apps/{application-id}/segments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                WriteSegmentRequest: {
                  shape: 'S48'
                }
              },
              required: ['ApplicationId', 'WriteSegmentRequest'],
              payload: 'WriteSegmentRequest'
            },
            output: {
              type: 'structure',
              members: {
                SegmentResponse: {
                  shape: 'S4j'
                }
              },
              required: ['SegmentResponse'],
              payload: 'SegmentResponse'
            }
          },
          CreateSmsTemplate: {
            http: {
              requestUri: '/v1/templates/{template-name}/sms',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                SMSTemplateRequest: {
                  shape: 'S4o'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                }
              },
              required: ['TemplateName', 'SMSTemplateRequest'],
              payload: 'SMSTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                CreateTemplateMessageBody: {
                  shape: 'S1t'
                }
              },
              required: ['CreateTemplateMessageBody'],
              payload: 'CreateTemplateMessageBody'
            }
          },
          CreateVoiceTemplate: {
            http: {
              requestUri: '/v1/templates/{template-name}/voice',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                VoiceTemplateRequest: {
                  shape: 'S4r'
                }
              },
              required: ['TemplateName', 'VoiceTemplateRequest'],
              payload: 'VoiceTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                CreateTemplateMessageBody: {
                  shape: 'S1t'
                }
              },
              required: ['CreateTemplateMessageBody'],
              payload: 'CreateTemplateMessageBody'
            }
          },
          DeleteAdmChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/adm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ADMChannelResponse: {
                  shape: 'S4v'
                }
              },
              required: ['ADMChannelResponse'],
              payload: 'ADMChannelResponse'
            }
          },
          DeleteApnsChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/apns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSChannelResponse: {
                  shape: 'S4y'
                }
              },
              required: ['APNSChannelResponse'],
              payload: 'APNSChannelResponse'
            }
          },
          DeleteApnsSandboxChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/apns_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSSandboxChannelResponse: {
                  shape: 'S51'
                }
              },
              required: ['APNSSandboxChannelResponse'],
              payload: 'APNSSandboxChannelResponse'
            }
          },
          DeleteApnsVoipChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipChannelResponse: {
                  shape: 'S54'
                }
              },
              required: ['APNSVoipChannelResponse'],
              payload: 'APNSVoipChannelResponse'
            }
          },
          DeleteApnsVoipSandboxChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipSandboxChannelResponse: {
                  shape: 'S57'
                }
              },
              required: ['APNSVoipSandboxChannelResponse'],
              payload: 'APNSVoipSandboxChannelResponse'
            }
          },
          DeleteApp: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationResponse: {
                  shape: 'S6'
                }
              },
              required: ['ApplicationResponse'],
              payload: 'ApplicationResponse'
            }
          },
          DeleteBaiduChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/baidu',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                BaiduChannelResponse: {
                  shape: 'S5c'
                }
              },
              required: ['BaiduChannelResponse'],
              payload: 'BaiduChannelResponse'
            }
          },
          DeleteCampaign: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                }
              },
              required: ['CampaignId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignResponse: {
                  shape: 'S1l'
                }
              },
              required: ['CampaignResponse'],
              payload: 'CampaignResponse'
            }
          },
          DeleteEmailChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/email',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                EmailChannelResponse: {
                  shape: 'S5h'
                }
              },
              required: ['EmailChannelResponse'],
              payload: 'EmailChannelResponse'
            }
          },
          DeleteEmailTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/templates/{template-name}/email',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          DeleteEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpoint-id'
                }
              },
              required: ['ApplicationId', 'EndpointId']
            },
            output: {
              type: 'structure',
              members: {
                EndpointResponse: {
                  shape: 'S5n'
                }
              },
              required: ['EndpointResponse'],
              payload: 'EndpointResponse'
            }
          },
          DeleteEventStream: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/eventstream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                EventStream: {
                  shape: 'S5w'
                }
              },
              required: ['EventStream'],
              payload: 'EventStream'
            }
          },
          DeleteGcmChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/gcm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                GCMChannelResponse: {
                  shape: 'S5z'
                }
              },
              required: ['GCMChannelResponse'],
              payload: 'GCMChannelResponse'
            }
          },
          DeleteInAppTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/templates/{template-name}/inapp',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          DeleteJourney: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                }
              },
              required: ['JourneyId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyResponse: {
                  shape: 'S3w'
                }
              },
              required: ['JourneyResponse'],
              payload: 'JourneyResponse'
            }
          },
          DeletePushTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/templates/{template-name}/push',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          DeleteRecommenderConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/recommenders/{recommender-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RecommenderId: {
                  location: 'uri',
                  locationName: 'recommender-id'
                }
              },
              required: ['RecommenderId']
            },
            output: {
              type: 'structure',
              members: {
                RecommenderConfigurationResponse: {
                  shape: 'S46'
                }
              },
              required: ['RecommenderConfigurationResponse'],
              payload: 'RecommenderConfigurationResponse'
            }
          },
          DeleteSegment: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                }
              },
              required: ['SegmentId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SegmentResponse: {
                  shape: 'S4j'
                }
              },
              required: ['SegmentResponse'],
              payload: 'SegmentResponse'
            }
          },
          DeleteSmsChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/sms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SMSChannelResponse: {
                  shape: 'S6c'
                }
              },
              required: ['SMSChannelResponse'],
              payload: 'SMSChannelResponse'
            }
          },
          DeleteSmsTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/templates/{template-name}/sms',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          DeleteUserEndpoints: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/users/{user-id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'user-id'
                }
              },
              required: ['ApplicationId', 'UserId']
            },
            output: {
              type: 'structure',
              members: {
                EndpointsResponse: {
                  shape: 'S6h'
                }
              },
              required: ['EndpointsResponse'],
              payload: 'EndpointsResponse'
            }
          },
          DeleteVoiceChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apps/{application-id}/channels/voice',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                VoiceChannelResponse: {
                  shape: 'S6l'
                }
              },
              required: ['VoiceChannelResponse'],
              payload: 'VoiceChannelResponse'
            }
          },
          DeleteVoiceTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/templates/{template-name}/voice',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          GetAdmChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/adm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ADMChannelResponse: {
                  shape: 'S4v'
                }
              },
              required: ['ADMChannelResponse'],
              payload: 'ADMChannelResponse'
            }
          },
          GetApnsChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/apns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSChannelResponse: {
                  shape: 'S4y'
                }
              },
              required: ['APNSChannelResponse'],
              payload: 'APNSChannelResponse'
            }
          },
          GetApnsSandboxChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/apns_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSSandboxChannelResponse: {
                  shape: 'S51'
                }
              },
              required: ['APNSSandboxChannelResponse'],
              payload: 'APNSSandboxChannelResponse'
            }
          },
          GetApnsVoipChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipChannelResponse: {
                  shape: 'S54'
                }
              },
              required: ['APNSVoipChannelResponse'],
              payload: 'APNSVoipChannelResponse'
            }
          },
          GetApnsVoipSandboxChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipSandboxChannelResponse: {
                  shape: 'S57'
                }
              },
              required: ['APNSVoipSandboxChannelResponse'],
              payload: 'APNSVoipSandboxChannelResponse'
            }
          },
          GetApp: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationResponse: {
                  shape: 'S6'
                }
              },
              required: ['ApplicationResponse'],
              payload: 'ApplicationResponse'
            }
          },
          GetApplicationDateRangeKpi: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/kpis/daterange/{kpi-name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'end-time'
                },
                KpiName: {
                  location: 'uri',
                  locationName: 'kpi-name'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                StartTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'start-time'
                }
              },
              required: ['ApplicationId', 'KpiName']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationDateRangeKpiResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    EndTime: {
                      shape: 'S3f'
                    },
                    KpiName: {},
                    KpiResult: {
                      shape: 'S73'
                    },
                    NextToken: {},
                    StartTime: {
                      shape: 'S3f'
                    }
                  },
                  required: ['KpiResult', 'KpiName', 'EndTime', 'StartTime', 'ApplicationId']
                }
              },
              required: ['ApplicationDateRangeKpiResponse'],
              payload: 'ApplicationDateRangeKpiResponse'
            }
          },
          GetApplicationSettings: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationSettingsResource: {
                  shape: 'S7a'
                }
              },
              required: ['ApplicationSettingsResource'],
              payload: 'ApplicationSettingsResource'
            }
          },
          GetApps: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationsResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        shape: 'S6'
                      }
                    },
                    NextToken: {}
                  }
                }
              },
              required: ['ApplicationsResponse'],
              payload: 'ApplicationsResponse'
            }
          },
          GetBaiduChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/baidu',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                BaiduChannelResponse: {
                  shape: 'S5c'
                }
              },
              required: ['BaiduChannelResponse'],
              payload: 'BaiduChannelResponse'
            }
          },
          GetCampaign: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                }
              },
              required: ['CampaignId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignResponse: {
                  shape: 'S1l'
                }
              },
              required: ['CampaignResponse'],
              payload: 'CampaignResponse'
            }
          },
          GetCampaignActivities: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/activities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId', 'CampaignId']
            },
            output: {
              type: 'structure',
              members: {
                ActivitiesResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ApplicationId: {},
                          CampaignId: {},
                          End: {},
                          Id: {},
                          Result: {},
                          ScheduledStart: {},
                          Start: {},
                          State: {},
                          SuccessfulEndpointCount: {
                            type: 'integer'
                          },
                          TimezonesCompletedCount: {
                            type: 'integer'
                          },
                          TimezonesTotalCount: {
                            type: 'integer'
                          },
                          TotalEndpointCount: {
                            type: 'integer'
                          },
                          TreatmentId: {},
                          ExecutionMetrics: {
                            shape: 'S4'
                          }
                        },
                        required: ['CampaignId', 'Id', 'ApplicationId']
                      }
                    },
                    NextToken: {}
                  },
                  required: ['Item']
                }
              },
              required: ['ActivitiesResponse'],
              payload: 'ActivitiesResponse'
            }
          },
          GetCampaignDateRangeKpi: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/kpis/daterange/{kpi-name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                },
                EndTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'end-time'
                },
                KpiName: {
                  location: 'uri',
                  locationName: 'kpi-name'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                StartTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'start-time'
                }
              },
              required: ['ApplicationId', 'KpiName', 'CampaignId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignDateRangeKpiResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    CampaignId: {},
                    EndTime: {
                      shape: 'S3f'
                    },
                    KpiName: {},
                    KpiResult: {
                      shape: 'S73'
                    },
                    NextToken: {},
                    StartTime: {
                      shape: 'S3f'
                    }
                  },
                  required: ['KpiResult', 'KpiName', 'EndTime', 'CampaignId', 'StartTime', 'ApplicationId']
                }
              },
              required: ['CampaignDateRangeKpiResponse'],
              payload: 'CampaignDateRangeKpiResponse'
            }
          },
          GetCampaignVersion: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                },
                Version: {
                  location: 'uri',
                  locationName: 'version'
                }
              },
              required: ['Version', 'ApplicationId', 'CampaignId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignResponse: {
                  shape: 'S1l'
                }
              },
              required: ['CampaignResponse'],
              payload: 'CampaignResponse'
            }
          },
          GetCampaignVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId', 'CampaignId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignsResponse: {
                  shape: 'S7w'
                }
              },
              required: ['CampaignsResponse'],
              payload: 'CampaignsResponse'
            }
          },
          GetCampaigns: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/campaigns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                CampaignsResponse: {
                  shape: 'S7w'
                }
              },
              required: ['CampaignsResponse'],
              payload: 'CampaignsResponse'
            }
          },
          GetChannels: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ChannelsResponse: {
                  type: 'structure',
                  members: {
                    Channels: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          ApplicationId: {},
                          CreationDate: {},
                          Enabled: {
                            type: 'boolean'
                          },
                          HasCredential: {
                            type: 'boolean'
                          },
                          Id: {},
                          IsArchived: {
                            type: 'boolean'
                          },
                          LastModifiedBy: {},
                          LastModifiedDate: {},
                          Version: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  },
                  required: ['Channels']
                }
              },
              required: ['ChannelsResponse'],
              payload: 'ChannelsResponse'
            }
          },
          GetEmailChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/email',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                EmailChannelResponse: {
                  shape: 'S5h'
                }
              },
              required: ['EmailChannelResponse'],
              payload: 'EmailChannelResponse'
            }
          },
          GetEmailTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/email',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                EmailTemplateResponse: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    CreationDate: {},
                    DefaultSubstitutions: {},
                    HtmlPart: {},
                    LastModifiedDate: {},
                    RecommenderId: {},
                    Subject: {},
                    Headers: {
                      shape: 'Sl'
                    },
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    },
                    TemplateDescription: {},
                    TemplateName: {},
                    TemplateType: {},
                    TextPart: {},
                    Version: {}
                  },
                  required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                }
              },
              required: ['EmailTemplateResponse'],
              payload: 'EmailTemplateResponse'
            }
          },
          GetEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpoint-id'
                }
              },
              required: ['ApplicationId', 'EndpointId']
            },
            output: {
              type: 'structure',
              members: {
                EndpointResponse: {
                  shape: 'S5n'
                }
              },
              required: ['EndpointResponse'],
              payload: 'EndpointResponse'
            }
          },
          GetEventStream: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/eventstream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                EventStream: {
                  shape: 'S5w'
                }
              },
              required: ['EventStream'],
              payload: 'EventStream'
            }
          },
          GetExportJob: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/jobs/export/{job-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'job-id'
                }
              },
              required: ['ApplicationId', 'JobId']
            },
            output: {
              type: 'structure',
              members: {
                ExportJobResponse: {
                  shape: 'S1x'
                }
              },
              required: ['ExportJobResponse'],
              payload: 'ExportJobResponse'
            }
          },
          GetExportJobs: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/jobs/export',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ExportJobsResponse: {
                  shape: 'S8j'
                }
              },
              required: ['ExportJobsResponse'],
              payload: 'ExportJobsResponse'
            }
          },
          GetGcmChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/gcm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                GCMChannelResponse: {
                  shape: 'S5z'
                }
              },
              required: ['GCMChannelResponse'],
              payload: 'GCMChannelResponse'
            }
          },
          GetImportJob: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/jobs/import/{job-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'job-id'
                }
              },
              required: ['ApplicationId', 'JobId']
            },
            output: {
              type: 'structure',
              members: {
                ImportJobResponse: {
                  shape: 'S24'
                }
              },
              required: ['ImportJobResponse'],
              payload: 'ImportJobResponse'
            }
          },
          GetImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/jobs/import',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ImportJobsResponse: {
                  shape: 'S8r'
                }
              },
              required: ['ImportJobsResponse'],
              payload: 'ImportJobsResponse'
            }
          },
          GetInAppMessages: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/endpoints/{endpoint-id}/inappmessages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpoint-id'
                }
              },
              required: ['ApplicationId', 'EndpointId']
            },
            output: {
              type: 'structure',
              members: {
                InAppMessagesResponse: {
                  type: 'structure',
                  members: {
                    InAppMessageCampaigns: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CampaignId: {},
                          DailyCap: {
                            type: 'integer'
                          },
                          InAppMessage: {
                            type: 'structure',
                            members: {
                              Content: {
                                shape: 'Sq'
                              },
                              CustomConfig: {
                                shape: 'S4'
                              },
                              Layout: {}
                            }
                          },
                          Priority: {
                            type: 'integer'
                          },
                          Schedule: {
                            type: 'structure',
                            members: {
                              EndDate: {},
                              EventFilter: {
                                shape: 'S11'
                              },
                              QuietTime: {
                                shape: 'S1e'
                              }
                            }
                          },
                          SessionCap: {
                            type: 'integer'
                          },
                          TotalCap: {
                            type: 'integer'
                          },
                          TreatmentId: {}
                        }
                      }
                    }
                  }
                }
              },
              required: ['InAppMessagesResponse'],
              payload: 'InAppMessagesResponse'
            }
          },
          GetInAppTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/inapp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                InAppTemplateResponse: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Content: {
                      shape: 'Sq'
                    },
                    CreationDate: {},
                    CustomConfig: {
                      shape: 'S4'
                    },
                    LastModifiedDate: {},
                    Layout: {},
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    },
                    TemplateDescription: {},
                    TemplateName: {},
                    TemplateType: {},
                    Version: {}
                  },
                  required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                }
              },
              required: ['InAppTemplateResponse'],
              payload: 'InAppTemplateResponse'
            }
          },
          GetJourney: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                }
              },
              required: ['JourneyId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyResponse: {
                  shape: 'S3w'
                }
              },
              required: ['JourneyResponse'],
              payload: 'JourneyResponse'
            }
          },
          GetJourneyDateRangeKpi: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/kpis/daterange/{kpi-name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'end-time'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                KpiName: {
                  location: 'uri',
                  locationName: 'kpi-name'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                StartTime: {
                  shape: 'S3f',
                  location: 'querystring',
                  locationName: 'start-time'
                }
              },
              required: ['JourneyId', 'ApplicationId', 'KpiName']
            },
            output: {
              type: 'structure',
              members: {
                JourneyDateRangeKpiResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    EndTime: {
                      shape: 'S3f'
                    },
                    JourneyId: {},
                    KpiName: {},
                    KpiResult: {
                      shape: 'S73'
                    },
                    NextToken: {},
                    StartTime: {
                      shape: 'S3f'
                    }
                  },
                  required: ['KpiResult', 'KpiName', 'JourneyId', 'EndTime', 'StartTime', 'ApplicationId']
                }
              },
              required: ['JourneyDateRangeKpiResponse'],
              payload: 'JourneyDateRangeKpiResponse'
            }
          },
          GetJourneyExecutionActivityMetrics: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/activities/{journey-activity-id}/execution-metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyActivityId: {
                  location: 'uri',
                  locationName: 'journey-activity-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                }
              },
              required: ['JourneyActivityId', 'ApplicationId', 'JourneyId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyExecutionActivityMetricsResponse: {
                  type: 'structure',
                  members: {
                    ActivityType: {},
                    ApplicationId: {},
                    JourneyActivityId: {},
                    JourneyId: {},
                    LastEvaluatedTime: {},
                    Metrics: {
                      shape: 'S4'
                    }
                  },
                  required: ['Metrics', 'JourneyId', 'LastEvaluatedTime', 'JourneyActivityId', 'ActivityType', 'ApplicationId']
                }
              },
              required: ['JourneyExecutionActivityMetricsResponse'],
              payload: 'JourneyExecutionActivityMetricsResponse'
            }
          },
          GetJourneyExecutionMetrics: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/execution-metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                }
              },
              required: ['ApplicationId', 'JourneyId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyExecutionMetricsResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    JourneyId: {},
                    LastEvaluatedTime: {},
                    Metrics: {
                      shape: 'S4'
                    }
                  },
                  required: ['Metrics', 'JourneyId', 'LastEvaluatedTime', 'ApplicationId']
                }
              },
              required: ['JourneyExecutionMetricsResponse'],
              payload: 'JourneyExecutionMetricsResponse'
            }
          },
          GetJourneyRunExecutionActivityMetrics: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/runs/{run-id}/activities/{journey-activity-id}/execution-metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyActivityId: {
                  location: 'uri',
                  locationName: 'journey-activity-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                RunId: {
                  location: 'uri',
                  locationName: 'run-id'
                }
              },
              required: ['RunId', 'JourneyActivityId', 'JourneyId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyRunExecutionActivityMetricsResponse: {
                  type: 'structure',
                  members: {
                    ActivityType: {},
                    ApplicationId: {},
                    JourneyActivityId: {},
                    JourneyId: {},
                    LastEvaluatedTime: {},
                    Metrics: {
                      shape: 'S4'
                    },
                    RunId: {}
                  },
                  required: ['Metrics', 'JourneyId', 'LastEvaluatedTime', 'JourneyActivityId', 'ActivityType', 'RunId', 'ApplicationId']
                }
              },
              required: ['JourneyRunExecutionActivityMetricsResponse'],
              payload: 'JourneyRunExecutionActivityMetricsResponse'
            }
          },
          GetJourneyRunExecutionMetrics: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/runs/{run-id}/execution-metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                RunId: {
                  location: 'uri',
                  locationName: 'run-id'
                }
              },
              required: ['RunId', 'ApplicationId', 'JourneyId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyRunExecutionMetricsResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    JourneyId: {},
                    LastEvaluatedTime: {},
                    Metrics: {
                      shape: 'S4'
                    },
                    RunId: {}
                  },
                  required: ['Metrics', 'JourneyId', 'LastEvaluatedTime', 'RunId', 'ApplicationId']
                }
              },
              required: ['JourneyRunExecutionMetricsResponse'],
              payload: 'JourneyRunExecutionMetricsResponse'
            }
          },
          GetJourneyRuns: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/runs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId', 'JourneyId']
            },
            output: {
              type: 'structure',
              members: {
                JourneyRunsResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CreationTime: {},
                          LastUpdateTime: {},
                          RunId: {},
                          Status: {}
                        },
                        required: ['Status', 'LastUpdateTime', 'CreationTime', 'RunId']
                      }
                    },
                    NextToken: {}
                  },
                  required: ['Item']
                }
              },
              required: ['JourneyRunsResponse'],
              payload: 'JourneyRunsResponse'
            }
          },
          GetPushTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/push',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                PushNotificationTemplateResponse: {
                  type: 'structure',
                  members: {
                    ADM: {
                      shape: 'S3z'
                    },
                    APNS: {
                      shape: 'S40'
                    },
                    Arn: {},
                    Baidu: {
                      shape: 'S3z'
                    },
                    CreationDate: {},
                    Default: {
                      shape: 'S41'
                    },
                    DefaultSubstitutions: {},
                    GCM: {
                      shape: 'S3z'
                    },
                    LastModifiedDate: {},
                    RecommenderId: {},
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    },
                    TemplateDescription: {},
                    TemplateName: {},
                    TemplateType: {},
                    Version: {}
                  },
                  required: ['LastModifiedDate', 'CreationDate', 'TemplateType', 'TemplateName']
                }
              },
              required: ['PushNotificationTemplateResponse'],
              payload: 'PushNotificationTemplateResponse'
            }
          },
          GetRecommenderConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v1/recommenders/{recommender-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RecommenderId: {
                  location: 'uri',
                  locationName: 'recommender-id'
                }
              },
              required: ['RecommenderId']
            },
            output: {
              type: 'structure',
              members: {
                RecommenderConfigurationResponse: {
                  shape: 'S46'
                }
              },
              required: ['RecommenderConfigurationResponse'],
              payload: 'RecommenderConfigurationResponse'
            }
          },
          GetRecommenderConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v1/recommenders',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ListRecommenderConfigurationsResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        shape: 'S46'
                      }
                    },
                    NextToken: {}
                  },
                  required: ['Item']
                }
              },
              required: ['ListRecommenderConfigurationsResponse'],
              payload: 'ListRecommenderConfigurationsResponse'
            }
          },
          GetSegment: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                }
              },
              required: ['SegmentId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SegmentResponse: {
                  shape: 'S4j'
                }
              },
              required: ['SegmentResponse'],
              payload: 'SegmentResponse'
            }
          },
          GetSegmentExportJobs: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}/jobs/export',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['SegmentId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ExportJobsResponse: {
                  shape: 'S8j'
                }
              },
              required: ['ExportJobsResponse'],
              payload: 'ExportJobsResponse'
            }
          },
          GetSegmentImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}/jobs/import',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['SegmentId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ImportJobsResponse: {
                  shape: 'S8r'
                }
              },
              required: ['ImportJobsResponse'],
              payload: 'ImportJobsResponse'
            }
          },
          GetSegmentVersion: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}/versions/{version}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                },
                Version: {
                  location: 'uri',
                  locationName: 'version'
                }
              },
              required: ['SegmentId', 'Version', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SegmentResponse: {
                  shape: 'S4j'
                }
              },
              required: ['SegmentResponse'],
              payload: 'SegmentResponse'
            }
          },
          GetSegmentVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['SegmentId', 'ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SegmentsResponse: {
                  shape: 'Sa9'
                }
              },
              required: ['SegmentsResponse'],
              payload: 'SegmentsResponse'
            }
          },
          GetSegments: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/segments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SegmentsResponse: {
                  shape: 'Sa9'
                }
              },
              required: ['SegmentsResponse'],
              payload: 'SegmentsResponse'
            }
          },
          GetSmsChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/sms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                SMSChannelResponse: {
                  shape: 'S6c'
                }
              },
              required: ['SMSChannelResponse'],
              payload: 'SMSChannelResponse'
            }
          },
          GetSmsTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/sms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                SMSTemplateResponse: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Body: {},
                    CreationDate: {},
                    DefaultSubstitutions: {},
                    LastModifiedDate: {},
                    RecommenderId: {},
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    },
                    TemplateDescription: {},
                    TemplateName: {},
                    TemplateType: {},
                    Version: {}
                  },
                  required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                }
              },
              required: ['SMSTemplateResponse'],
              payload: 'SMSTemplateResponse'
            }
          },
          GetUserEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/users/{user-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                UserId: {
                  location: 'uri',
                  locationName: 'user-id'
                }
              },
              required: ['ApplicationId', 'UserId']
            },
            output: {
              type: 'structure',
              members: {
                EndpointsResponse: {
                  shape: 'S6h'
                }
              },
              required: ['EndpointsResponse'],
              payload: 'EndpointsResponse'
            }
          },
          GetVoiceChannel: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/channels/voice',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                VoiceChannelResponse: {
                  shape: 'S6l'
                }
              },
              required: ['VoiceChannelResponse'],
              payload: 'VoiceChannelResponse'
            }
          },
          GetVoiceTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/voice',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName']
            },
            output: {
              type: 'structure',
              members: {
                VoiceTemplateResponse: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Body: {},
                    CreationDate: {},
                    DefaultSubstitutions: {},
                    LanguageCode: {},
                    LastModifiedDate: {},
                    tags: {
                      shape: 'S4',
                      locationName: 'tags'
                    },
                    TemplateDescription: {},
                    TemplateName: {},
                    TemplateType: {},
                    Version: {},
                    VoiceId: {}
                  },
                  required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                }
              },
              required: ['VoiceTemplateResponse'],
              payload: 'VoiceTemplateResponse'
            }
          },
          ListJourneys: {
            http: {
              method: 'GET',
              requestUri: '/v1/apps/{application-id}/journeys',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Token: {
                  location: 'querystring',
                  locationName: 'token'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                JourneysResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        shape: 'S3w'
                      }
                    },
                    NextToken: {}
                  },
                  required: ['Item']
                }
              },
              required: ['JourneysResponse'],
              payload: 'JourneysResponse'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                TagsModel: {
                  shape: 'Sav'
                }
              },
              required: ['TagsModel'],
              payload: 'TagsModel'
            }
          },
          ListTemplateVersions: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates/{template-name}/{template-type}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                TemplateType: {
                  location: 'uri',
                  locationName: 'template-type'
                }
              },
              required: ['TemplateName', 'TemplateType']
            },
            output: {
              type: 'structure',
              members: {
                TemplateVersionsResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CreationDate: {},
                          DefaultSubstitutions: {},
                          LastModifiedDate: {},
                          TemplateDescription: {},
                          TemplateName: {},
                          TemplateType: {},
                          Version: {}
                        },
                        required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                      }
                    },
                    Message: {},
                    NextToken: {},
                    RequestID: {}
                  },
                  required: ['Item']
                }
              },
              required: ['TemplateVersionsResponse'],
              payload: 'TemplateVersionsResponse'
            }
          },
          ListTemplates: {
            http: {
              method: 'GET',
              requestUri: '/v1/templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'page-size'
                },
                Prefix: {
                  location: 'querystring',
                  locationName: 'prefix'
                },
                TemplateType: {
                  location: 'querystring',
                  locationName: 'template-type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplatesResponse: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Arn: {},
                          CreationDate: {},
                          DefaultSubstitutions: {},
                          LastModifiedDate: {},
                          tags: {
                            shape: 'S4',
                            locationName: 'tags'
                          },
                          TemplateDescription: {},
                          TemplateName: {},
                          TemplateType: {},
                          Version: {}
                        },
                        required: ['LastModifiedDate', 'CreationDate', 'TemplateName', 'TemplateType']
                      }
                    },
                    NextToken: {}
                  },
                  required: ['Item']
                }
              },
              required: ['TemplatesResponse'],
              payload: 'TemplatesResponse'
            }
          },
          PhoneNumberValidate: {
            http: {
              requestUri: '/v1/phone/number/validate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NumberValidateRequest: {
                  type: 'structure',
                  members: {
                    IsoCountryCode: {},
                    PhoneNumber: {}
                  }
                }
              },
              required: ['NumberValidateRequest'],
              payload: 'NumberValidateRequest'
            },
            output: {
              type: 'structure',
              members: {
                NumberValidateResponse: {
                  type: 'structure',
                  members: {
                    Carrier: {},
                    City: {},
                    CleansedPhoneNumberE164: {},
                    CleansedPhoneNumberNational: {},
                    Country: {},
                    CountryCodeIso2: {},
                    CountryCodeNumeric: {},
                    County: {},
                    OriginalCountryCodeIso2: {},
                    OriginalPhoneNumber: {},
                    PhoneType: {},
                    PhoneTypeCode: {
                      type: 'integer'
                    },
                    Timezone: {},
                    ZipCode: {}
                  }
                }
              },
              required: ['NumberValidateResponse'],
              payload: 'NumberValidateResponse'
            }
          },
          PutEventStream: {
            http: {
              requestUri: '/v1/apps/{application-id}/eventstream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                WriteEventStream: {
                  type: 'structure',
                  members: {
                    DestinationStreamArn: {},
                    RoleArn: {}
                  },
                  required: ['RoleArn', 'DestinationStreamArn']
                }
              },
              required: ['ApplicationId', 'WriteEventStream'],
              payload: 'WriteEventStream'
            },
            output: {
              type: 'structure',
              members: {
                EventStream: {
                  shape: 'S5w'
                }
              },
              required: ['EventStream'],
              payload: 'EventStream'
            }
          },
          PutEvents: {
            http: {
              requestUri: '/v1/apps/{application-id}/events',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EventsRequest: {
                  type: 'structure',
                  members: {
                    BatchItem: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          Endpoint: {
                            type: 'structure',
                            members: {
                              Address: {},
                              Attributes: {
                                shape: 'S5o'
                              },
                              ChannelType: {},
                              Demographic: {
                                shape: 'S5q'
                              },
                              EffectiveDate: {},
                              EndpointStatus: {},
                              Location: {
                                shape: 'S5r'
                              },
                              Metrics: {
                                shape: 'S5s'
                              },
                              OptOut: {},
                              RequestId: {},
                              User: {
                                shape: 'S5t'
                              }
                            }
                          },
                          Events: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'structure',
                              members: {
                                AppPackageName: {},
                                AppTitle: {},
                                AppVersionCode: {},
                                Attributes: {
                                  shape: 'S4'
                                },
                                ClientSdkVersion: {},
                                EventType: {},
                                Metrics: {
                                  shape: 'S5s'
                                },
                                SdkName: {},
                                Session: {
                                  type: 'structure',
                                  members: {
                                    Duration: {
                                      type: 'integer'
                                    },
                                    Id: {},
                                    StartTimestamp: {},
                                    StopTimestamp: {}
                                  },
                                  required: ['StartTimestamp', 'Id']
                                },
                                Timestamp: {}
                              },
                              required: ['EventType', 'Timestamp']
                            }
                          }
                        },
                        required: ['Endpoint', 'Events']
                      }
                    }
                  },
                  required: ['BatchItem']
                }
              },
              required: ['ApplicationId', 'EventsRequest'],
              payload: 'EventsRequest'
            },
            output: {
              type: 'structure',
              members: {
                EventsResponse: {
                  type: 'structure',
                  members: {
                    Results: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          EndpointItemResponse: {
                            type: 'structure',
                            members: {
                              Message: {},
                              StatusCode: {
                                type: 'integer'
                              }
                            }
                          },
                          EventsItemResponse: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'structure',
                              members: {
                                Message: {},
                                StatusCode: {
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
              },
              required: ['EventsResponse'],
              payload: 'EventsResponse'
            }
          },
          RemoveAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/attributes/{attribute-type}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                AttributeType: {
                  location: 'uri',
                  locationName: 'attribute-type'
                },
                UpdateAttributesRequest: {
                  type: 'structure',
                  members: {
                    Blacklist: {
                      shape: 'S16'
                    }
                  }
                }
              },
              required: ['AttributeType', 'ApplicationId', 'UpdateAttributesRequest'],
              payload: 'UpdateAttributesRequest'
            },
            output: {
              type: 'structure',
              members: {
                AttributesResource: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    AttributeType: {},
                    Attributes: {
                      shape: 'S16'
                    }
                  },
                  required: ['AttributeType', 'ApplicationId']
                }
              },
              required: ['AttributesResource'],
              payload: 'AttributesResource'
            }
          },
          SendMessages: {
            http: {
              requestUri: '/v1/apps/{application-id}/messages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                MessageRequest: {
                  type: 'structure',
                  members: {
                    Addresses: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          BodyOverride: {},
                          ChannelType: {},
                          Context: {
                            shape: 'S4'
                          },
                          RawContent: {},
                          Substitutions: {
                            shape: 'S5o'
                          },
                          TitleOverride: {}
                        }
                      }
                    },
                    Context: {
                      shape: 'S4'
                    },
                    Endpoints: {
                      shape: 'Sc0'
                    },
                    MessageConfiguration: {
                      shape: 'Sc2'
                    },
                    TemplateConfiguration: {
                      shape: 'S1f'
                    },
                    TraceId: {}
                  },
                  required: ['MessageConfiguration']
                }
              },
              required: ['ApplicationId', 'MessageRequest'],
              payload: 'MessageRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageResponse: {
                  shape: 'Sch'
                }
              },
              required: ['MessageResponse'],
              payload: 'MessageResponse'
            }
          },
          SendOTPMessage: {
            http: {
              requestUri: '/v1/apps/{application-id}/otp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SendOTPMessageRequestParameters: {
                  type: 'structure',
                  members: {
                    AllowedAttempts: {
                      type: 'integer'
                    },
                    BrandName: {},
                    Channel: {},
                    CodeLength: {
                      type: 'integer'
                    },
                    DestinationIdentity: {},
                    EntityId: {},
                    Language: {},
                    OriginationIdentity: {},
                    ReferenceId: {},
                    TemplateId: {},
                    ValidityPeriod: {
                      type: 'integer'
                    }
                  },
                  required: ['BrandName', 'ReferenceId', 'Channel', 'DestinationIdentity', 'OriginationIdentity']
                }
              },
              required: ['ApplicationId', 'SendOTPMessageRequestParameters'],
              payload: 'SendOTPMessageRequestParameters'
            },
            output: {
              type: 'structure',
              members: {
                MessageResponse: {
                  shape: 'Sch'
                }
              },
              required: ['MessageResponse'],
              payload: 'MessageResponse'
            }
          },
          SendUsersMessages: {
            http: {
              requestUri: '/v1/apps/{application-id}/users-messages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SendUsersMessageRequest: {
                  type: 'structure',
                  members: {
                    Context: {
                      shape: 'S4'
                    },
                    MessageConfiguration: {
                      shape: 'Sc2'
                    },
                    TemplateConfiguration: {
                      shape: 'S1f'
                    },
                    TraceId: {},
                    Users: {
                      shape: 'Sc0'
                    }
                  },
                  required: ['MessageConfiguration', 'Users']
                }
              },
              required: ['ApplicationId', 'SendUsersMessageRequest'],
              payload: 'SendUsersMessageRequest'
            },
            output: {
              type: 'structure',
              members: {
                SendUsersMessageResponse: {
                  type: 'structure',
                  members: {
                    ApplicationId: {},
                    RequestId: {},
                    Result: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sci'
                      }
                    }
                  },
                  required: ['ApplicationId']
                }
              },
              required: ['SendUsersMessageResponse'],
              payload: 'SendUsersMessageResponse'
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagsModel: {
                  shape: 'Sav'
                }
              },
              required: ['ResourceArn', 'TagsModel'],
              payload: 'TagsModel'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  shape: 'S16',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateAdmChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/adm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ADMChannelRequest: {
                  type: 'structure',
                  members: {
                    ClientId: {},
                    ClientSecret: {},
                    Enabled: {
                      type: 'boolean'
                    }
                  },
                  required: ['ClientSecret', 'ClientId']
                },
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId', 'ADMChannelRequest'],
              payload: 'ADMChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                ADMChannelResponse: {
                  shape: 'S4v'
                }
              },
              required: ['ADMChannelResponse'],
              payload: 'ADMChannelResponse'
            }
          },
          UpdateApnsChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/apns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                APNSChannelRequest: {
                  type: 'structure',
                  members: {
                    BundleId: {},
                    Certificate: {},
                    DefaultAuthenticationMethod: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    PrivateKey: {},
                    TeamId: {},
                    TokenKey: {},
                    TokenKeyId: {}
                  }
                },
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId', 'APNSChannelRequest'],
              payload: 'APNSChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                APNSChannelResponse: {
                  shape: 'S4y'
                }
              },
              required: ['APNSChannelResponse'],
              payload: 'APNSChannelResponse'
            }
          },
          UpdateApnsSandboxChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/apns_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                APNSSandboxChannelRequest: {
                  type: 'structure',
                  members: {
                    BundleId: {},
                    Certificate: {},
                    DefaultAuthenticationMethod: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    PrivateKey: {},
                    TeamId: {},
                    TokenKey: {},
                    TokenKeyId: {}
                  }
                },
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId', 'APNSSandboxChannelRequest'],
              payload: 'APNSSandboxChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                APNSSandboxChannelResponse: {
                  shape: 'S51'
                }
              },
              required: ['APNSSandboxChannelResponse'],
              payload: 'APNSSandboxChannelResponse'
            }
          },
          UpdateApnsVoipChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                APNSVoipChannelRequest: {
                  type: 'structure',
                  members: {
                    BundleId: {},
                    Certificate: {},
                    DefaultAuthenticationMethod: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    PrivateKey: {},
                    TeamId: {},
                    TokenKey: {},
                    TokenKeyId: {}
                  }
                },
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId', 'APNSVoipChannelRequest'],
              payload: 'APNSVoipChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipChannelResponse: {
                  shape: 'S54'
                }
              },
              required: ['APNSVoipChannelResponse'],
              payload: 'APNSVoipChannelResponse'
            }
          },
          UpdateApnsVoipSandboxChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                APNSVoipSandboxChannelRequest: {
                  type: 'structure',
                  members: {
                    BundleId: {},
                    Certificate: {},
                    DefaultAuthenticationMethod: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    PrivateKey: {},
                    TeamId: {},
                    TokenKey: {},
                    TokenKeyId: {}
                  }
                },
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                }
              },
              required: ['ApplicationId', 'APNSVoipSandboxChannelRequest'],
              payload: 'APNSVoipSandboxChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                APNSVoipSandboxChannelResponse: {
                  shape: 'S57'
                }
              },
              required: ['APNSVoipSandboxChannelResponse'],
              payload: 'APNSVoipSandboxChannelResponse'
            }
          },
          UpdateApplicationSettings: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                WriteApplicationSettingsRequest: {
                  type: 'structure',
                  members: {
                    CampaignHook: {
                      shape: 'S1h'
                    },
                    CloudWatchMetricsEnabled: {
                      type: 'boolean'
                    },
                    EventTaggingEnabled: {
                      type: 'boolean'
                    },
                    Limits: {
                      shape: 'S1j'
                    },
                    QuietTime: {
                      shape: 'S1e'
                    },
                    JourneyLimits: {
                      shape: 'S7b'
                    }
                  }
                }
              },
              required: ['ApplicationId', 'WriteApplicationSettingsRequest'],
              payload: 'WriteApplicationSettingsRequest'
            },
            output: {
              type: 'structure',
              members: {
                ApplicationSettingsResource: {
                  shape: 'S7a'
                }
              },
              required: ['ApplicationSettingsResource'],
              payload: 'ApplicationSettingsResource'
            }
          },
          UpdateBaiduChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/baidu',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                BaiduChannelRequest: {
                  type: 'structure',
                  members: {
                    ApiKey: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    SecretKey: {}
                  },
                  required: ['SecretKey', 'ApiKey']
                }
              },
              required: ['ApplicationId', 'BaiduChannelRequest'],
              payload: 'BaiduChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                BaiduChannelResponse: {
                  shape: 'S5c'
                }
              },
              required: ['BaiduChannelResponse'],
              payload: 'BaiduChannelResponse'
            }
          },
          UpdateCampaign: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                CampaignId: {
                  location: 'uri',
                  locationName: 'campaign-id'
                },
                WriteCampaignRequest: {
                  shape: 'S8'
                }
              },
              required: ['CampaignId', 'ApplicationId', 'WriteCampaignRequest'],
              payload: 'WriteCampaignRequest'
            },
            output: {
              type: 'structure',
              members: {
                CampaignResponse: {
                  shape: 'S1l'
                }
              },
              required: ['CampaignResponse'],
              payload: 'CampaignResponse'
            }
          },
          UpdateEmailChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/email',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EmailChannelRequest: {
                  type: 'structure',
                  members: {
                    ConfigurationSet: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    FromAddress: {},
                    Identity: {},
                    RoleArn: {},
                    OrchestrationSendingRoleArn: {}
                  },
                  required: ['FromAddress', 'Identity']
                }
              },
              required: ['ApplicationId', 'EmailChannelRequest'],
              payload: 'EmailChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                EmailChannelResponse: {
                  shape: 'S5h'
                }
              },
              required: ['EmailChannelResponse'],
              payload: 'EmailChannelResponse'
            }
          },
          UpdateEmailTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/email',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CreateNewVersion: {
                  location: 'querystring',
                  locationName: 'create-new-version',
                  type: 'boolean'
                },
                EmailTemplateRequest: {
                  shape: 'S1r'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName', 'EmailTemplateRequest'],
              payload: 'EmailTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateEndpoint: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpoint-id'
                },
                EndpointRequest: {
                  type: 'structure',
                  members: {
                    Address: {},
                    Attributes: {
                      shape: 'S5o'
                    },
                    ChannelType: {},
                    Demographic: {
                      shape: 'S5q'
                    },
                    EffectiveDate: {},
                    EndpointStatus: {},
                    Location: {
                      shape: 'S5r'
                    },
                    Metrics: {
                      shape: 'S5s'
                    },
                    OptOut: {},
                    RequestId: {},
                    User: {
                      shape: 'S5t'
                    }
                  }
                }
              },
              required: ['ApplicationId', 'EndpointId', 'EndpointRequest'],
              payload: 'EndpointRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateEndpointsBatch: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/endpoints',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                EndpointBatchRequest: {
                  type: 'structure',
                  members: {
                    Item: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Address: {},
                          Attributes: {
                            shape: 'S5o'
                          },
                          ChannelType: {},
                          Demographic: {
                            shape: 'S5q'
                          },
                          EffectiveDate: {},
                          EndpointStatus: {},
                          Id: {},
                          Location: {
                            shape: 'S5r'
                          },
                          Metrics: {
                            shape: 'S5s'
                          },
                          OptOut: {},
                          RequestId: {},
                          User: {
                            shape: 'S5t'
                          }
                        }
                      }
                    }
                  },
                  required: ['Item']
                }
              },
              required: ['ApplicationId', 'EndpointBatchRequest'],
              payload: 'EndpointBatchRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateGcmChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/gcm',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                GCMChannelRequest: {
                  type: 'structure',
                  members: {
                    ApiKey: {},
                    DefaultAuthenticationMethod: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    ServiceJson: {}
                  }
                }
              },
              required: ['ApplicationId', 'GCMChannelRequest'],
              payload: 'GCMChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                GCMChannelResponse: {
                  shape: 'S5z'
                }
              },
              required: ['GCMChannelResponse'],
              payload: 'GCMChannelResponse'
            }
          },
          UpdateInAppTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/inapp',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CreateNewVersion: {
                  location: 'querystring',
                  locationName: 'create-new-version',
                  type: 'boolean'
                },
                InAppTemplateRequest: {
                  shape: 'S27'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName', 'InAppTemplateRequest'],
              payload: 'InAppTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateJourney: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                WriteJourneyRequest: {
                  shape: 'S2b'
                }
              },
              required: ['JourneyId', 'ApplicationId', 'WriteJourneyRequest'],
              payload: 'WriteJourneyRequest'
            },
            output: {
              type: 'structure',
              members: {
                JourneyResponse: {
                  shape: 'S3w'
                }
              },
              required: ['JourneyResponse'],
              payload: 'JourneyResponse'
            }
          },
          UpdateJourneyState: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/journeys/{journey-id}/state',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                JourneyId: {
                  location: 'uri',
                  locationName: 'journey-id'
                },
                JourneyStateRequest: {
                  type: 'structure',
                  members: {
                    State: {}
                  }
                }
              },
              required: ['JourneyId', 'ApplicationId', 'JourneyStateRequest'],
              payload: 'JourneyStateRequest'
            },
            output: {
              type: 'structure',
              members: {
                JourneyResponse: {
                  shape: 'S3w'
                }
              },
              required: ['JourneyResponse'],
              payload: 'JourneyResponse'
            }
          },
          UpdatePushTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/push',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CreateNewVersion: {
                  location: 'querystring',
                  locationName: 'create-new-version',
                  type: 'boolean'
                },
                PushNotificationTemplateRequest: {
                  shape: 'S3y'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName', 'PushNotificationTemplateRequest'],
              payload: 'PushNotificationTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateRecommenderConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v1/recommenders/{recommender-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RecommenderId: {
                  location: 'uri',
                  locationName: 'recommender-id'
                },
                UpdateRecommenderConfiguration: {
                  type: 'structure',
                  members: {
                    Attributes: {
                      shape: 'S4'
                    },
                    Description: {},
                    Name: {},
                    RecommendationProviderIdType: {},
                    RecommendationProviderRoleArn: {},
                    RecommendationProviderUri: {},
                    RecommendationTransformerUri: {},
                    RecommendationsDisplayName: {},
                    RecommendationsPerMessage: {
                      type: 'integer'
                    }
                  },
                  required: ['RecommendationProviderUri', 'RecommendationProviderRoleArn']
                }
              },
              required: ['RecommenderId', 'UpdateRecommenderConfiguration'],
              payload: 'UpdateRecommenderConfiguration'
            },
            output: {
              type: 'structure',
              members: {
                RecommenderConfigurationResponse: {
                  shape: 'S46'
                }
              },
              required: ['RecommenderConfigurationResponse'],
              payload: 'RecommenderConfigurationResponse'
            }
          },
          UpdateSegment: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/segments/{segment-id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SegmentId: {
                  location: 'uri',
                  locationName: 'segment-id'
                },
                WriteSegmentRequest: {
                  shape: 'S48'
                }
              },
              required: ['SegmentId', 'ApplicationId', 'WriteSegmentRequest'],
              payload: 'WriteSegmentRequest'
            },
            output: {
              type: 'structure',
              members: {
                SegmentResponse: {
                  shape: 'S4j'
                }
              },
              required: ['SegmentResponse'],
              payload: 'SegmentResponse'
            }
          },
          UpdateSmsChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/sms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                SMSChannelRequest: {
                  type: 'structure',
                  members: {
                    Enabled: {
                      type: 'boolean'
                    },
                    SenderId: {},
                    ShortCode: {}
                  }
                }
              },
              required: ['ApplicationId', 'SMSChannelRequest'],
              payload: 'SMSChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                SMSChannelResponse: {
                  shape: 'S6c'
                }
              },
              required: ['SMSChannelResponse'],
              payload: 'SMSChannelResponse'
            }
          },
          UpdateSmsTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/sms',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CreateNewVersion: {
                  location: 'querystring',
                  locationName: 'create-new-version',
                  type: 'boolean'
                },
                SMSTemplateRequest: {
                  shape: 'S4o'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                }
              },
              required: ['TemplateName', 'SMSTemplateRequest'],
              payload: 'SMSTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateTemplateActiveVersion: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/{template-type}/active-version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TemplateActiveVersionRequest: {
                  type: 'structure',
                  members: {
                    Version: {}
                  }
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                TemplateType: {
                  location: 'uri',
                  locationName: 'template-type'
                }
              },
              required: ['TemplateName', 'TemplateType', 'TemplateActiveVersionRequest'],
              payload: 'TemplateActiveVersionRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          UpdateVoiceChannel: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apps/{application-id}/channels/voice',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                VoiceChannelRequest: {
                  type: 'structure',
                  members: {
                    Enabled: {
                      type: 'boolean'
                    }
                  }
                }
              },
              required: ['ApplicationId', 'VoiceChannelRequest'],
              payload: 'VoiceChannelRequest'
            },
            output: {
              type: 'structure',
              members: {
                VoiceChannelResponse: {
                  shape: 'S6l'
                }
              },
              required: ['VoiceChannelResponse'],
              payload: 'VoiceChannelResponse'
            }
          },
          UpdateVoiceTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v1/templates/{template-name}/voice',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CreateNewVersion: {
                  location: 'querystring',
                  locationName: 'create-new-version',
                  type: 'boolean'
                },
                TemplateName: {
                  location: 'uri',
                  locationName: 'template-name'
                },
                Version: {
                  location: 'querystring',
                  locationName: 'version'
                },
                VoiceTemplateRequest: {
                  shape: 'S4r'
                }
              },
              required: ['TemplateName', 'VoiceTemplateRequest'],
              payload: 'VoiceTemplateRequest'
            },
            output: {
              type: 'structure',
              members: {
                MessageBody: {
                  shape: 'S5k'
                }
              },
              required: ['MessageBody'],
              payload: 'MessageBody'
            }
          },
          VerifyOTPMessage: {
            http: {
              requestUri: '/v1/apps/{application-id}/verify-otp',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'application-id'
                },
                VerifyOTPMessageRequestParameters: {
                  type: 'structure',
                  members: {
                    DestinationIdentity: {},
                    Otp: {},
                    ReferenceId: {}
                  },
                  required: ['ReferenceId', 'Otp', 'DestinationIdentity']
                }
              },
              required: ['ApplicationId', 'VerifyOTPMessageRequestParameters'],
              payload: 'VerifyOTPMessageRequestParameters'
            },
            output: {
              type: 'structure',
              members: {
                VerificationResponse: {
                  type: 'structure',
                  members: {
                    Valid: {
                      type: 'boolean'
                    }
                  }
                }
              },
              required: ['VerificationResponse'],
              payload: 'VerificationResponse'
            }
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          S6: {
            type: 'structure',
            members: {
              Arn: {},
              Id: {},
              Name: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              CreationDate: {}
            },
            required: ['Id', 'Arn', 'Name']
          },
          S8: {
            type: 'structure',
            members: {
              AdditionalTreatments: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CustomDeliveryConfiguration: {
                      shape: 'Sb'
                    },
                    MessageConfiguration: {
                      shape: 'Se'
                    },
                    Schedule: {
                      shape: 'S10'
                    },
                    SizePercent: {
                      type: 'integer'
                    },
                    TemplateConfiguration: {
                      shape: 'S1f'
                    },
                    TreatmentDescription: {},
                    TreatmentName: {}
                  },
                  required: ['SizePercent']
                }
              },
              CustomDeliveryConfiguration: {
                shape: 'Sb'
              },
              Description: {},
              HoldoutPercent: {
                type: 'integer'
              },
              Hook: {
                shape: 'S1h'
              },
              IsPaused: {
                type: 'boolean'
              },
              Limits: {
                shape: 'S1j'
              },
              MessageConfiguration: {
                shape: 'Se'
              },
              Name: {},
              Schedule: {
                shape: 'S10'
              },
              SegmentId: {},
              SegmentVersion: {
                type: 'integer'
              },
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateConfiguration: {
                shape: 'S1f'
              },
              TreatmentDescription: {},
              TreatmentName: {},
              Priority: {
                type: 'integer'
              }
            }
          },
          Sb: {
            type: 'structure',
            members: {
              DeliveryUri: {},
              EndpointTypes: {
                shape: 'Sc'
              }
            },
            required: ['DeliveryUri']
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'structure',
            members: {
              ADMMessage: {
                shape: 'Sf'
              },
              APNSMessage: {
                shape: 'Sf'
              },
              BaiduMessage: {
                shape: 'Sf'
              },
              CustomMessage: {
                type: 'structure',
                members: {
                  Data: {}
                }
              },
              DefaultMessage: {
                shape: 'Sf'
              },
              EmailMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  FromAddress: {},
                  Headers: {
                    shape: 'Sl'
                  },
                  HtmlBody: {},
                  Title: {}
                }
              },
              GCMMessage: {
                shape: 'Sf'
              },
              SMSMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  MessageType: {},
                  OriginationNumber: {},
                  SenderId: {},
                  EntityId: {},
                  TemplateId: {}
                }
              },
              InAppMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  Content: {
                    shape: 'Sq'
                  },
                  CustomConfig: {
                    shape: 'S4'
                  },
                  Layout: {}
                }
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              Action: {},
              Body: {},
              ImageIconUrl: {},
              ImageSmallIconUrl: {},
              ImageUrl: {},
              JsonBody: {},
              MediaUrl: {},
              RawContent: {},
              SilentPush: {
                type: 'boolean'
              },
              TimeToLive: {
                type: 'integer'
              },
              Title: {},
              Url: {}
            }
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BackgroundColor: {},
                BodyConfig: {
                  type: 'structure',
                  members: {
                    Alignment: {},
                    Body: {},
                    TextColor: {}
                  },
                  required: ['Alignment', 'TextColor', 'Body']
                },
                HeaderConfig: {
                  type: 'structure',
                  members: {
                    Alignment: {},
                    Header: {},
                    TextColor: {}
                  },
                  required: ['Alignment', 'Header', 'TextColor']
                },
                ImageUrl: {},
                PrimaryBtn: {
                  shape: 'Sv'
                },
                SecondaryBtn: {
                  shape: 'Sv'
                }
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              Android: {
                shape: 'Sw'
              },
              DefaultConfig: {
                type: 'structure',
                members: {
                  BackgroundColor: {},
                  BorderRadius: {
                    type: 'integer'
                  },
                  ButtonAction: {},
                  Link: {},
                  Text: {},
                  TextColor: {}
                },
                required: ['ButtonAction', 'Text']
              },
              IOS: {
                shape: 'Sw'
              },
              Web: {
                shape: 'Sw'
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              ButtonAction: {},
              Link: {}
            },
            required: ['ButtonAction']
          },
          S10: {
            type: 'structure',
            members: {
              EndTime: {},
              EventFilter: {
                shape: 'S11'
              },
              Frequency: {},
              IsLocalTime: {
                type: 'boolean'
              },
              QuietTime: {
                shape: 'S1e'
              },
              StartTime: {},
              Timezone: {}
            },
            required: ['StartTime']
          },
          S11: {
            type: 'structure',
            members: {
              Dimensions: {
                shape: 'S12'
              },
              FilterType: {}
            },
            required: ['FilterType', 'Dimensions']
          },
          S12: {
            type: 'structure',
            members: {
              Attributes: {
                shape: 'S13'
              },
              EventType: {
                shape: 'S17'
              },
              Metrics: {
                shape: 'S19'
              }
            }
          },
          S13: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                AttributeType: {},
                Values: {
                  shape: 'S16'
                }
              },
              required: ['Values']
            }
          },
          S16: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'structure',
            members: {
              DimensionType: {},
              Values: {
                shape: 'S16'
              }
            },
            required: ['Values']
          },
          S19: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                ComparisonOperator: {},
                Value: {
                  type: 'double'
                }
              },
              required: ['ComparisonOperator', 'Value']
            }
          },
          S1e: {
            type: 'structure',
            members: {
              End: {},
              Start: {}
            }
          },
          S1f: {
            type: 'structure',
            members: {
              EmailTemplate: {
                shape: 'S1g'
              },
              PushTemplate: {
                shape: 'S1g'
              },
              SMSTemplate: {
                shape: 'S1g'
              },
              VoiceTemplate: {
                shape: 'S1g'
              },
              InAppTemplate: {
                shape: 'S1g'
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              Name: {},
              Version: {}
            }
          },
          S1h: {
            type: 'structure',
            members: {
              LambdaFunctionName: {},
              Mode: {},
              WebUrl: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              Daily: {
                type: 'integer'
              },
              MaximumDuration: {
                type: 'integer'
              },
              MessagesPerSecond: {
                type: 'integer'
              },
              Total: {
                type: 'integer'
              },
              Session: {
                type: 'integer'
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              AdditionalTreatments: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CustomDeliveryConfiguration: {
                      shape: 'Sb'
                    },
                    Id: {},
                    MessageConfiguration: {
                      shape: 'Se'
                    },
                    Schedule: {
                      shape: 'S10'
                    },
                    SizePercent: {
                      type: 'integer'
                    },
                    State: {
                      shape: 'S1o'
                    },
                    TemplateConfiguration: {
                      shape: 'S1f'
                    },
                    TreatmentDescription: {},
                    TreatmentName: {}
                  },
                  required: ['Id', 'SizePercent']
                }
              },
              ApplicationId: {},
              Arn: {},
              CreationDate: {},
              CustomDeliveryConfiguration: {
                shape: 'Sb'
              },
              DefaultState: {
                shape: 'S1o'
              },
              Description: {},
              HoldoutPercent: {
                type: 'integer'
              },
              Hook: {
                shape: 'S1h'
              },
              Id: {},
              IsPaused: {
                type: 'boolean'
              },
              LastModifiedDate: {},
              Limits: {
                shape: 'S1j'
              },
              MessageConfiguration: {
                shape: 'Se'
              },
              Name: {},
              Schedule: {
                shape: 'S10'
              },
              SegmentId: {},
              SegmentVersion: {
                type: 'integer'
              },
              State: {
                shape: 'S1o'
              },
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateConfiguration: {
                shape: 'S1f'
              },
              TreatmentDescription: {},
              TreatmentName: {},
              Version: {
                type: 'integer'
              },
              Priority: {
                type: 'integer'
              }
            },
            required: ['LastModifiedDate', 'CreationDate', 'SegmentId', 'SegmentVersion', 'Id', 'Arn', 'ApplicationId']
          },
          S1o: {
            type: 'structure',
            members: {
              CampaignStatus: {}
            }
          },
          S1r: {
            type: 'structure',
            members: {
              DefaultSubstitutions: {},
              HtmlPart: {},
              RecommenderId: {},
              Subject: {},
              Headers: {
                shape: 'Sl'
              },
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateDescription: {},
              TextPart: {}
            }
          },
          S1t: {
            type: 'structure',
            members: {
              Arn: {},
              Message: {},
              RequestID: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CompletedPieces: {
                type: 'integer'
              },
              CompletionDate: {},
              CreationDate: {},
              Definition: {
                type: 'structure',
                members: {
                  RoleArn: {},
                  S3UrlPrefix: {},
                  SegmentId: {},
                  SegmentVersion: {
                    type: 'integer'
                  }
                },
                required: ['S3UrlPrefix', 'RoleArn']
              },
              FailedPieces: {
                type: 'integer'
              },
              Failures: {
                shape: 'S16'
              },
              Id: {},
              JobStatus: {},
              TotalFailures: {
                type: 'integer'
              },
              TotalPieces: {
                type: 'integer'
              },
              TotalProcessed: {
                type: 'integer'
              },
              Type: {}
            },
            required: ['JobStatus', 'CreationDate', 'Type', 'Definition', 'Id', 'ApplicationId']
          },
          S24: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CompletedPieces: {
                type: 'integer'
              },
              CompletionDate: {},
              CreationDate: {},
              Definition: {
                type: 'structure',
                members: {
                  DefineSegment: {
                    type: 'boolean'
                  },
                  ExternalId: {},
                  Format: {},
                  RegisterEndpoints: {
                    type: 'boolean'
                  },
                  RoleArn: {},
                  S3Url: {},
                  SegmentId: {},
                  SegmentName: {}
                },
                required: ['Format', 'S3Url', 'RoleArn']
              },
              FailedPieces: {
                type: 'integer'
              },
              Failures: {
                shape: 'S16'
              },
              Id: {},
              JobStatus: {},
              TotalFailures: {
                type: 'integer'
              },
              TotalPieces: {
                type: 'integer'
              },
              TotalProcessed: {
                type: 'integer'
              },
              Type: {}
            },
            required: ['JobStatus', 'CreationDate', 'Type', 'Definition', 'Id', 'ApplicationId']
          },
          S27: {
            type: 'structure',
            members: {
              Content: {
                shape: 'Sq'
              },
              CustomConfig: {
                shape: 'S4'
              },
              Layout: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateDescription: {}
            }
          },
          S2b: {
            type: 'structure',
            members: {
              Activities: {
                shape: 'S2c'
              },
              CreationDate: {},
              LastModifiedDate: {},
              Limits: {
                shape: 'S3c'
              },
              LocalTime: {
                type: 'boolean'
              },
              Name: {},
              QuietTime: {
                shape: 'S1e'
              },
              RefreshFrequency: {},
              Schedule: {
                shape: 'S3e'
              },
              StartActivity: {},
              StartCondition: {
                shape: 'S3g'
              },
              State: {},
              WaitForQuietTime: {
                type: 'boolean'
              },
              RefreshOnSegmentUpdate: {
                type: 'boolean'
              },
              JourneyChannelSettings: {
                shape: 'S3k'
              },
              SendingSchedule: {
                type: 'boolean'
              },
              OpenHours: {
                shape: 'S3l'
              },
              ClosedDays: {
                shape: 'S3q'
              },
              TimezoneEstimationMethods: {
                shape: 'S3t'
              }
            },
            required: ['Name']
          },
          S2c: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                CUSTOM: {
                  type: 'structure',
                  members: {
                    DeliveryUri: {},
                    EndpointTypes: {
                      shape: 'Sc'
                    },
                    MessageConfig: {
                      type: 'structure',
                      members: {
                        Data: {}
                      }
                    },
                    NextActivity: {},
                    TemplateName: {},
                    TemplateVersion: {}
                  }
                },
                ConditionalSplit: {
                  type: 'structure',
                  members: {
                    Condition: {
                      type: 'structure',
                      members: {
                        Conditions: {
                          type: 'list',
                          member: {
                            shape: 'S2j'
                          }
                        },
                        Operator: {}
                      }
                    },
                    EvaluationWaitTime: {
                      shape: 'S2w'
                    },
                    FalseActivity: {},
                    TrueActivity: {}
                  }
                },
                Description: {},
                EMAIL: {
                  type: 'structure',
                  members: {
                    MessageConfig: {
                      type: 'structure',
                      members: {
                        FromAddress: {}
                      }
                    },
                    NextActivity: {},
                    TemplateName: {},
                    TemplateVersion: {}
                  }
                },
                Holdout: {
                  type: 'structure',
                  members: {
                    NextActivity: {},
                    Percentage: {
                      type: 'integer'
                    }
                  },
                  required: ['Percentage']
                },
                MultiCondition: {
                  type: 'structure',
                  members: {
                    Branches: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Condition: {
                            shape: 'S2j'
                          },
                          NextActivity: {}
                        }
                      }
                    },
                    DefaultActivity: {},
                    EvaluationWaitTime: {
                      shape: 'S2w'
                    }
                  }
                },
                PUSH: {
                  type: 'structure',
                  members: {
                    MessageConfig: {
                      type: 'structure',
                      members: {
                        TimeToLive: {}
                      }
                    },
                    NextActivity: {},
                    TemplateName: {},
                    TemplateVersion: {}
                  }
                },
                RandomSplit: {
                  type: 'structure',
                  members: {
                    Branches: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          NextActivity: {},
                          Percentage: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                SMS: {
                  type: 'structure',
                  members: {
                    MessageConfig: {
                      type: 'structure',
                      members: {
                        MessageType: {},
                        OriginationNumber: {},
                        SenderId: {},
                        EntityId: {},
                        TemplateId: {}
                      }
                    },
                    NextActivity: {},
                    TemplateName: {},
                    TemplateVersion: {}
                  }
                },
                Wait: {
                  type: 'structure',
                  members: {
                    NextActivity: {},
                    WaitTime: {
                      shape: 'S2w'
                    }
                  }
                },
                ContactCenter: {
                  type: 'structure',
                  members: {
                    NextActivity: {}
                  }
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              EventCondition: {
                type: 'structure',
                members: {
                  Dimensions: {
                    shape: 'S12'
                  },
                  MessageActivity: {}
                }
              },
              SegmentCondition: {
                shape: 'S2l'
              },
              SegmentDimensions: {
                shape: 'S2m',
                locationName: 'segmentDimensions'
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              SegmentId: {}
            },
            required: ['SegmentId']
          },
          S2m: {
            type: 'structure',
            members: {
              Attributes: {
                shape: 'S13'
              },
              Behavior: {
                type: 'structure',
                members: {
                  Recency: {
                    type: 'structure',
                    members: {
                      Duration: {},
                      RecencyType: {}
                    },
                    required: ['Duration', 'RecencyType']
                  }
                }
              },
              Demographic: {
                type: 'structure',
                members: {
                  AppVersion: {
                    shape: 'S17'
                  },
                  Channel: {
                    shape: 'S17'
                  },
                  DeviceType: {
                    shape: 'S17'
                  },
                  Make: {
                    shape: 'S17'
                  },
                  Model: {
                    shape: 'S17'
                  },
                  Platform: {
                    shape: 'S17'
                  }
                }
              },
              Location: {
                type: 'structure',
                members: {
                  Country: {
                    shape: 'S17'
                  },
                  GPSPoint: {
                    type: 'structure',
                    members: {
                      Coordinates: {
                        type: 'structure',
                        members: {
                          Latitude: {
                            type: 'double'
                          },
                          Longitude: {
                            type: 'double'
                          }
                        },
                        required: ['Latitude', 'Longitude']
                      },
                      RangeInKilometers: {
                        type: 'double'
                      }
                    },
                    required: ['Coordinates']
                  }
                }
              },
              Metrics: {
                shape: 'S19'
              },
              UserAttributes: {
                shape: 'S13'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              WaitFor: {},
              WaitUntil: {}
            }
          },
          S3c: {
            type: 'structure',
            members: {
              DailyCap: {
                type: 'integer'
              },
              EndpointReentryCap: {
                type: 'integer'
              },
              MessagesPerSecond: {
                type: 'integer'
              },
              EndpointReentryInterval: {},
              TimeframeCap: {
                shape: 'S3d'
              },
              TotalCap: {
                type: 'integer'
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              Cap: {
                type: 'integer'
              },
              Days: {
                type: 'integer'
              }
            }
          },
          S3e: {
            type: 'structure',
            members: {
              EndTime: {
                shape: 'S3f'
              },
              StartTime: {
                shape: 'S3f'
              },
              Timezone: {}
            }
          },
          S3f: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S3g: {
            type: 'structure',
            members: {
              Description: {},
              EventStartCondition: {
                type: 'structure',
                members: {
                  EventFilter: {
                    type: 'structure',
                    members: {
                      Dimensions: {
                        shape: 'S12'
                      },
                      FilterType: {}
                    },
                    required: ['FilterType', 'Dimensions']
                  },
                  SegmentId: {}
                }
              },
              SegmentStartCondition: {
                shape: 'S2l'
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              ConnectCampaignArn: {},
              ConnectCampaignExecutionRoleArn: {}
            }
          },
          S3l: {
            type: 'structure',
            members: {
              EMAIL: {
                shape: 'S3m'
              },
              SMS: {
                shape: 'S3m'
              },
              PUSH: {
                shape: 'S3m'
              },
              VOICE: {
                shape: 'S3m'
              },
              CUSTOM: {
                shape: 'S3m'
              }
            }
          },
          S3m: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                members: {
                  StartTime: {},
                  EndTime: {}
                }
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              EMAIL: {
                shape: 'S3r'
              },
              SMS: {
                shape: 'S3r'
              },
              PUSH: {
                shape: 'S3r'
              },
              VOICE: {
                shape: 'S3r'
              },
              CUSTOM: {
                shape: 'S3r'
              }
            }
          },
          S3r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                StartDateTime: {},
                EndDateTime: {}
              }
            }
          },
          S3t: {
            type: 'list',
            member: {}
          },
          S3w: {
            type: 'structure',
            members: {
              Activities: {
                shape: 'S2c'
              },
              ApplicationId: {},
              CreationDate: {},
              Id: {},
              LastModifiedDate: {},
              Limits: {
                shape: 'S3c'
              },
              LocalTime: {
                type: 'boolean'
              },
              Name: {},
              QuietTime: {
                shape: 'S1e'
              },
              RefreshFrequency: {},
              Schedule: {
                shape: 'S3e'
              },
              StartActivity: {},
              StartCondition: {
                shape: 'S3g'
              },
              State: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              WaitForQuietTime: {
                type: 'boolean'
              },
              RefreshOnSegmentUpdate: {
                type: 'boolean'
              },
              JourneyChannelSettings: {
                shape: 'S3k'
              },
              SendingSchedule: {
                type: 'boolean'
              },
              OpenHours: {
                shape: 'S3l'
              },
              ClosedDays: {
                shape: 'S3q'
              },
              TimezoneEstimationMethods: {
                shape: 'S3t'
              }
            },
            required: ['Name', 'Id', 'ApplicationId']
          },
          S3y: {
            type: 'structure',
            members: {
              ADM: {
                shape: 'S3z'
              },
              APNS: {
                shape: 'S40'
              },
              Baidu: {
                shape: 'S3z'
              },
              Default: {
                shape: 'S41'
              },
              DefaultSubstitutions: {},
              GCM: {
                shape: 'S3z'
              },
              RecommenderId: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateDescription: {}
            }
          },
          S3z: {
            type: 'structure',
            members: {
              Action: {},
              Body: {},
              ImageIconUrl: {},
              ImageUrl: {},
              RawContent: {},
              SmallImageIconUrl: {},
              Sound: {},
              Title: {},
              Url: {}
            }
          },
          S40: {
            type: 'structure',
            members: {
              Action: {},
              Body: {},
              MediaUrl: {},
              RawContent: {},
              Sound: {},
              Title: {},
              Url: {}
            }
          },
          S41: {
            type: 'structure',
            members: {
              Action: {},
              Body: {},
              Sound: {},
              Title: {},
              Url: {}
            }
          },
          S46: {
            type: 'structure',
            members: {
              Attributes: {
                shape: 'S4'
              },
              CreationDate: {},
              Description: {},
              Id: {},
              LastModifiedDate: {},
              Name: {},
              RecommendationProviderIdType: {},
              RecommendationProviderRoleArn: {},
              RecommendationProviderUri: {},
              RecommendationTransformerUri: {},
              RecommendationsDisplayName: {},
              RecommendationsPerMessage: {
                type: 'integer'
              }
            },
            required: ['RecommendationProviderUri', 'LastModifiedDate', 'CreationDate', 'RecommendationProviderRoleArn', 'Id']
          },
          S48: {
            type: 'structure',
            members: {
              Dimensions: {
                shape: 'S2m'
              },
              Name: {},
              SegmentGroups: {
                shape: 'S49'
              },
              tags: {
                shape: 'S4',
                locationName: 'tags'
              }
            }
          },
          S49: {
            type: 'structure',
            members: {
              Groups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Dimensions: {
                      type: 'list',
                      member: {
                        shape: 'S2m'
                      }
                    },
                    SourceSegments: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Id: {},
                          Version: {
                            type: 'integer'
                          }
                        },
                        required: ['Id']
                      }
                    },
                    SourceType: {},
                    Type: {}
                  }
                }
              },
              Include: {}
            }
          },
          S4j: {
            type: 'structure',
            members: {
              ApplicationId: {},
              Arn: {},
              CreationDate: {},
              Dimensions: {
                shape: 'S2m'
              },
              Id: {},
              ImportDefinition: {
                type: 'structure',
                members: {
                  ChannelCounts: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'integer'
                    }
                  },
                  ExternalId: {},
                  Format: {},
                  RoleArn: {},
                  S3Url: {},
                  Size: {
                    type: 'integer'
                  }
                },
                required: ['Format', 'S3Url', 'Size', 'ExternalId', 'RoleArn']
              },
              LastModifiedDate: {},
              Name: {},
              SegmentGroups: {
                shape: 'S49'
              },
              SegmentType: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              Version: {
                type: 'integer'
              }
            },
            required: ['SegmentType', 'CreationDate', 'Id', 'Arn', 'ApplicationId']
          },
          S4o: {
            type: 'structure',
            members: {
              Body: {},
              DefaultSubstitutions: {},
              RecommenderId: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateDescription: {}
            }
          },
          S4r: {
            type: 'structure',
            members: {
              Body: {},
              DefaultSubstitutions: {},
              LanguageCode: {},
              tags: {
                shape: 'S4',
                locationName: 'tags'
              },
              TemplateDescription: {},
              VoiceId: {}
            }
          },
          S4v: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S4y: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              DefaultAuthenticationMethod: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              HasTokenKey: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S51: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              DefaultAuthenticationMethod: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              HasTokenKey: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S54: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              DefaultAuthenticationMethod: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              HasTokenKey: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S57: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              DefaultAuthenticationMethod: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              HasTokenKey: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S5c: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              Credential: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Credential', 'Platform']
          },
          S5h: {
            type: 'structure',
            members: {
              ApplicationId: {},
              ConfigurationSet: {},
              CreationDate: {},
              Enabled: {
                type: 'boolean'
              },
              FromAddress: {},
              HasCredential: {
                type: 'boolean'
              },
              Id: {},
              Identity: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              MessagesPerSecond: {
                type: 'integer'
              },
              Platform: {},
              RoleArn: {},
              OrchestrationSendingRoleArn: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S5k: {
            type: 'structure',
            members: {
              Message: {},
              RequestID: {}
            }
          },
          S5n: {
            type: 'structure',
            members: {
              Address: {},
              ApplicationId: {},
              Attributes: {
                shape: 'S5o'
              },
              ChannelType: {},
              CohortId: {},
              CreationDate: {},
              Demographic: {
                shape: 'S5q'
              },
              EffectiveDate: {},
              EndpointStatus: {},
              Id: {},
              Location: {
                shape: 'S5r'
              },
              Metrics: {
                shape: 'S5s'
              },
              OptOut: {},
              RequestId: {},
              User: {
                shape: 'S5t'
              }
            }
          },
          S5o: {
            type: 'map',
            key: {},
            value: {
              shape: 'S16'
            }
          },
          S5q: {
            type: 'structure',
            members: {
              AppVersion: {},
              Locale: {},
              Make: {},
              Model: {},
              ModelVersion: {},
              Platform: {},
              PlatformVersion: {},
              Timezone: {}
            }
          },
          S5r: {
            type: 'structure',
            members: {
              City: {},
              Country: {},
              Latitude: {
                type: 'double'
              },
              Longitude: {
                type: 'double'
              },
              PostalCode: {},
              Region: {}
            }
          },
          S5s: {
            type: 'map',
            key: {},
            value: {
              type: 'double'
            }
          },
          S5t: {
            type: 'structure',
            members: {
              UserAttributes: {
                shape: 'S5o'
              },
              UserId: {}
            }
          },
          S5w: {
            type: 'structure',
            members: {
              ApplicationId: {},
              DestinationStreamArn: {},
              ExternalId: {},
              LastModifiedDate: {},
              LastUpdatedBy: {},
              RoleArn: {}
            },
            required: ['ApplicationId', 'RoleArn', 'DestinationStreamArn']
          },
          S5z: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              Credential: {},
              DefaultAuthenticationMethod: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              HasFcmServiceCredentials: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S6c: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              PromotionalMessagesPerSecond: {
                type: 'integer'
              },
              SenderId: {},
              ShortCode: {},
              TransactionalMessagesPerSecond: {
                type: 'integer'
              },
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S6h: {
            type: 'structure',
            members: {
              Item: {
                type: 'list',
                member: {
                  shape: 'S5n'
                }
              }
            },
            required: ['Item']
          },
          S6l: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CreationDate: {},
              Enabled: {
                type: 'boolean'
              },
              HasCredential: {
                type: 'boolean'
              },
              Id: {},
              IsArchived: {
                type: 'boolean'
              },
              LastModifiedBy: {},
              LastModifiedDate: {},
              Platform: {},
              Version: {
                type: 'integer'
              }
            },
            required: ['Platform']
          },
          S73: {
            type: 'structure',
            members: {
              Rows: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    GroupedBys: {
                      shape: 'S76'
                    },
                    Values: {
                      shape: 'S76'
                    }
                  },
                  required: ['GroupedBys', 'Values']
                }
              }
            },
            required: ['Rows']
          },
          S76: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Type: {},
                Value: {}
              },
              required: ['Type', 'Value', 'Key']
            }
          },
          S7a: {
            type: 'structure',
            members: {
              ApplicationId: {},
              CampaignHook: {
                shape: 'S1h'
              },
              LastModifiedDate: {},
              Limits: {
                shape: 'S1j'
              },
              QuietTime: {
                shape: 'S1e'
              },
              JourneyLimits: {
                shape: 'S7b'
              }
            },
            required: ['ApplicationId']
          },
          S7b: {
            type: 'structure',
            members: {
              DailyCap: {
                type: 'integer'
              },
              TimeframeCap: {
                shape: 'S3d'
              },
              TotalCap: {
                type: 'integer'
              }
            }
          },
          S7w: {
            type: 'structure',
            members: {
              Item: {
                type: 'list',
                member: {
                  shape: 'S1l'
                }
              },
              NextToken: {}
            },
            required: ['Item']
          },
          S8j: {
            type: 'structure',
            members: {
              Item: {
                type: 'list',
                member: {
                  shape: 'S1x'
                }
              },
              NextToken: {}
            },
            required: ['Item']
          },
          S8r: {
            type: 'structure',
            members: {
              Item: {
                type: 'list',
                member: {
                  shape: 'S24'
                }
              },
              NextToken: {}
            },
            required: ['Item']
          },
          Sa9: {
            type: 'structure',
            members: {
              Item: {
                type: 'list',
                member: {
                  shape: 'S4j'
                }
              },
              NextToken: {}
            },
            required: ['Item']
          },
          Sav: {
            type: 'structure',
            members: {
              tags: {
                shape: 'S4',
                locationName: 'tags'
              }
            },
            required: ['tags']
          },
          Sc0: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                BodyOverride: {},
                Context: {
                  shape: 'S4'
                },
                RawContent: {},
                Substitutions: {
                  shape: 'S5o'
                },
                TitleOverride: {}
              }
            }
          },
          Sc2: {
            type: 'structure',
            members: {
              ADMMessage: {
                type: 'structure',
                members: {
                  Action: {},
                  Body: {},
                  ConsolidationKey: {},
                  Data: {
                    shape: 'S4'
                  },
                  ExpiresAfter: {},
                  IconReference: {},
                  ImageIconUrl: {},
                  ImageUrl: {},
                  MD5: {},
                  RawContent: {},
                  SilentPush: {
                    type: 'boolean'
                  },
                  SmallImageIconUrl: {},
                  Sound: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  Title: {},
                  Url: {}
                }
              },
              APNSMessage: {
                type: 'structure',
                members: {
                  APNSPushType: {},
                  Action: {},
                  Badge: {
                    type: 'integer'
                  },
                  Body: {},
                  Category: {},
                  CollapseId: {},
                  Data: {
                    shape: 'S4'
                  },
                  MediaUrl: {},
                  PreferredAuthenticationMethod: {},
                  Priority: {},
                  RawContent: {},
                  SilentPush: {
                    type: 'boolean'
                  },
                  Sound: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  ThreadId: {},
                  TimeToLive: {
                    type: 'integer'
                  },
                  Title: {},
                  Url: {}
                }
              },
              BaiduMessage: {
                type: 'structure',
                members: {
                  Action: {},
                  Body: {},
                  Data: {
                    shape: 'S4'
                  },
                  IconReference: {},
                  ImageIconUrl: {},
                  ImageUrl: {},
                  RawContent: {},
                  SilentPush: {
                    type: 'boolean'
                  },
                  SmallImageIconUrl: {},
                  Sound: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  TimeToLive: {
                    type: 'integer'
                  },
                  Title: {},
                  Url: {}
                }
              },
              DefaultMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  Substitutions: {
                    shape: 'S5o'
                  }
                }
              },
              DefaultPushNotificationMessage: {
                type: 'structure',
                members: {
                  Action: {},
                  Body: {},
                  Data: {
                    shape: 'S4'
                  },
                  SilentPush: {
                    type: 'boolean'
                  },
                  Substitutions: {
                    shape: 'S5o'
                  },
                  Title: {},
                  Url: {}
                }
              },
              EmailMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  FeedbackForwardingAddress: {},
                  FromAddress: {},
                  RawEmail: {
                    type: 'structure',
                    members: {
                      Data: {
                        type: 'blob'
                      }
                    }
                  },
                  ReplyToAddresses: {
                    shape: 'S16'
                  },
                  SimpleEmail: {
                    type: 'structure',
                    members: {
                      HtmlPart: {
                        shape: 'Scc'
                      },
                      Subject: {
                        shape: 'Scc'
                      },
                      TextPart: {
                        shape: 'Scc'
                      },
                      Headers: {
                        shape: 'Sl'
                      }
                    }
                  },
                  Substitutions: {
                    shape: 'S5o'
                  }
                }
              },
              GCMMessage: {
                type: 'structure',
                members: {
                  Action: {},
                  Body: {},
                  CollapseKey: {},
                  Data: {
                    shape: 'S4'
                  },
                  IconReference: {},
                  ImageIconUrl: {},
                  ImageUrl: {},
                  PreferredAuthenticationMethod: {},
                  Priority: {},
                  RawContent: {},
                  RestrictedPackageName: {},
                  SilentPush: {
                    type: 'boolean'
                  },
                  SmallImageIconUrl: {},
                  Sound: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  TimeToLive: {
                    type: 'integer'
                  },
                  Title: {},
                  Url: {}
                }
              },
              SMSMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  Keyword: {},
                  MediaUrl: {},
                  MessageType: {},
                  OriginationNumber: {},
                  SenderId: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  EntityId: {},
                  TemplateId: {}
                }
              },
              VoiceMessage: {
                type: 'structure',
                members: {
                  Body: {},
                  LanguageCode: {},
                  OriginationNumber: {},
                  Substitutions: {
                    shape: 'S5o'
                  },
                  VoiceId: {}
                }
              }
            }
          },
          Scc: {
            type: 'structure',
            members: {
              Charset: {},
              Data: {}
            }
          },
          Sch: {
            type: 'structure',
            members: {
              ApplicationId: {},
              EndpointResult: {
                shape: 'Sci'
              },
              RequestId: {},
              Result: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    DeliveryStatus: {},
                    MessageId: {},
                    StatusCode: {
                      type: 'integer'
                    },
                    StatusMessage: {},
                    UpdatedToken: {}
                  },
                  required: ['DeliveryStatus', 'StatusCode']
                }
              }
            },
            required: ['ApplicationId']
          },
          Sci: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Address: {},
                DeliveryStatus: {},
                MessageId: {},
                StatusCode: {
                  type: 'integer'
                },
                StatusMessage: {},
                UpdatedToken: {}
              },
              required: ['DeliveryStatus', 'StatusCode']
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bfc922e169f0c702605594fcb1ecf773008a5afc.js.map