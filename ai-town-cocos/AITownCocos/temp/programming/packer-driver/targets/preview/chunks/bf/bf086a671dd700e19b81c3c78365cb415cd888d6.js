System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-08-03',
          endpointPrefix: 'voice-chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime SDK Voice',
          serviceId: 'Chime SDK Voice',
          signatureVersion: 'v4',
          signingName: 'chime',
          uid: 'chime-sdk-voice-2022-08-03'
        },
        operations: {
          AssociatePhoneNumbersWithVoiceConnector: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}?operation=associate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                E164PhoneNumbers: {
                  shape: 'S3'
                },
                ForceAssociate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          AssociatePhoneNumbersWithVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}?operation=associate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                E164PhoneNumbers: {
                  shape: 'S3'
                },
                ForceAssociate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          BatchDeletePhoneNumber: {
            http: {
              requestUri: '/phone-numbers?operation=batch-delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberIds'],
              members: {
                PhoneNumberIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          BatchUpdatePhoneNumber: {
            http: {
              requestUri: '/phone-numbers?operation=batch-update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UpdatePhoneNumberRequestItems'],
              members: {
                UpdatePhoneNumberRequestItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['PhoneNumberId'],
                    members: {
                      PhoneNumberId: {
                        shape: 'S9'
                      },
                      ProductType: {},
                      CallingName: {
                        shape: 'Sl'
                      },
                      Name: {
                        shape: 'Sm'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          CreatePhoneNumberOrder: {
            http: {
              requestUri: '/phone-number-orders',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ProductType', 'E164PhoneNumbers'],
              members: {
                ProductType: {},
                E164PhoneNumbers: {
                  shape: 'S3'
                },
                Name: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberOrder: {
                  shape: 'Sq'
                }
              }
            }
          },
          CreateProxySession: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ParticipantPhoneNumbers', 'Capabilities', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ParticipantPhoneNumbers: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                Name: {
                  type: 'string',
                  sensitive: true
                },
                ExpiryMinutes: {
                  type: 'integer'
                },
                Capabilities: {
                  shape: 'S13'
                },
                NumberSelectionBehavior: {},
                GeoMatchLevel: {},
                GeoMatchParams: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S1b'
                }
              }
            }
          },
          CreateSipMediaApplication: {
            http: {
              requestUri: '/sip-media-applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AwsRegion', 'Name', 'Endpoints'],
              members: {
                AwsRegion: {},
                Name: {},
                Endpoints: {
                  shape: 'S1i'
                },
                Tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreateSipMediaApplicationCall: {
            http: {
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/calls',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FromPhoneNumber', 'ToPhoneNumber', 'SipMediaApplicationId'],
              members: {
                FromPhoneNumber: {
                  shape: 'S4'
                },
                ToPhoneNumber: {
                  shape: 'S4'
                },
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                SipHeaders: {
                  type: 'map',
                  key: {
                    shape: 'S1t'
                  },
                  value: {
                    shape: 'S1t'
                  }
                },
                ArgumentsMap: {
                  type: 'map',
                  key: {
                    shape: 'S1t'
                  },
                  value: {
                    shape: 'S1t'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationCall: {
                  shape: 'S1w'
                }
              }
            }
          },
          CreateSipRule: {
            http: {
              requestUri: '/sip-rules',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'TriggerType', 'TriggerValue'],
              members: {
                Name: {},
                TriggerType: {},
                TriggerValue: {},
                Disabled: {
                  type: 'boolean'
                },
                TargetApplications: {
                  shape: 'S20'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S24'
                }
              }
            }
          },
          CreateVoiceConnector: {
            http: {
              requestUri: '/voice-connectors',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'RequireEncryption'],
              members: {
                Name: {},
                AwsRegion: {},
                RequireEncryption: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S2a'
                }
              }
            }
          },
          CreateVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                VoiceConnectorItems: {
                  shape: 'S2d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S2h'
                }
              }
            }
          },
          CreateVoiceProfile: {
            http: {
              requestUri: '/voice-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['SpeakerSearchTaskId'],
              members: {
                SpeakerSearchTaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          CreateVoiceProfileDomain: {
            http: {
              requestUri: '/voice-profile-domains',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'ServerSideEncryptionConfiguration'],
              members: {
                Name: {},
                Description: {},
                ServerSideEncryptionConfiguration: {
                  shape: 'S2q'
                },
                ClientRequestToken: {},
                Tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfileDomain: {
                  shape: 'S2t'
                }
              }
            }
          },
          DeletePhoneNumber: {
            http: {
              method: 'DELETE',
              requestUri: '/phone-numbers/{phoneNumberId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  shape: 'S9',
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            }
          },
          DeleteProxySession: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                }
              }
            }
          },
          DeleteSipMediaApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            }
          },
          DeleteSipRule: {
            http: {
              method: 'DELETE',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['SipRuleId'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                }
              }
            }
          },
          DeleteVoiceConnector: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                }
              }
            }
          },
          DeleteVoiceConnectorOrigination: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorProxy: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorTermination: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            }
          },
          DeleteVoiceConnectorTerminationCredentials: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials?operation=delete',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Usernames', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Usernames: {
                  shape: 'S36'
                }
              }
            }
          },
          DeleteVoiceProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-profiles/{VoiceProfileId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileId'],
              members: {
                VoiceProfileId: {
                  location: 'uri',
                  locationName: 'VoiceProfileId'
                }
              }
            }
          },
          DeleteVoiceProfileDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/voice-profile-domains/{VoiceProfileDomainId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileDomainId'],
              members: {
                VoiceProfileDomainId: {
                  location: 'uri',
                  locationName: 'VoiceProfileDomainId'
                }
              }
            }
          },
          DisassociatePhoneNumbersFromVoiceConnector: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}?operation=disassociate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                E164PhoneNumbers: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          DisassociatePhoneNumbersFromVoiceConnectorGroup: {
            http: {
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}?operation=disassociate-phone-numbers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'E164PhoneNumbers'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                E164PhoneNumbers: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberErrors: {
                  shape: 'S7'
                }
              }
            }
          },
          GetGlobalSettings: {
            http: {
              method: 'GET',
              requestUri: '/settings',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S3e'
                }
              }
            }
          },
          GetPhoneNumber: {
            http: {
              method: 'GET',
              requestUri: '/phone-numbers/{phoneNumberId}'
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  shape: 'S9',
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S3h'
                }
              }
            }
          },
          GetPhoneNumberOrder: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-orders/{phoneNumberOrderId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberOrderId'],
              members: {
                PhoneNumberOrderId: {
                  location: 'uri',
                  locationName: 'phoneNumberOrderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberOrder: {
                  shape: 'Sq'
                }
              }
            }
          },
          GetPhoneNumberSettings: {
            http: {
              method: 'GET',
              requestUri: '/settings/phone-number',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                CallingName: {
                  shape: 'Sl'
                },
                CallingNameUpdatedTimestamp: {
                  shape: 'Sx'
                }
              }
            }
          },
          GetProxySession: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S1b'
                }
              }
            }
          },
          GetSipMediaApplication: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S1q'
                }
              }
            }
          },
          GetSipMediaApplicationAlexaSkillConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/alexa-skill-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationAlexaSkillConfiguration: {
                  shape: 'S3z'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to the Alexa Smart Properties page(https://developer.amazon.com/en-US/alexa/alexasmartproperties).'
          },
          GetSipMediaApplicationLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S45'
                }
              }
            }
          },
          GetSipRule: {
            http: {
              method: 'GET',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipRuleId'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S24'
                }
              }
            }
          },
          GetSpeakerSearchTask: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'SpeakerSearchTaskId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                SpeakerSearchTaskId: {
                  location: 'uri',
                  locationName: 'SpeakerSearchTaskId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SpeakerSearchTask: {
                  shape: 'S4a'
                }
              }
            }
          },
          GetVoiceConnector: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S2a'
                }
              }
            }
          },
          GetVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmergencyCallingConfiguration: {
                  shape: 'S4k'
                }
              }
            }
          },
          GetVoiceConnectorGroup: {
            http: {
              method: 'GET',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S2h'
                }
              }
            }
          },
          GetVoiceConnectorLoggingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S4r'
                }
              }
            }
          },
          GetVoiceConnectorOrigination: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Origination: {
                  shape: 'S4u'
                }
              }
            }
          },
          GetVoiceConnectorProxy: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Proxy: {
                  shape: 'S53'
                }
              }
            }
          },
          GetVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfiguration: {
                  shape: 'S58'
                }
              }
            }
          },
          GetVoiceConnectorTermination: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Termination: {
                  shape: 'S5g'
                }
              }
            }
          },
          GetVoiceConnectorTerminationHealth: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/health',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TerminationHealth: {
                  type: 'structure',
                  members: {
                    Timestamp: {
                      shape: 'Sx'
                    },
                    Source: {}
                  }
                }
              }
            }
          },
          GetVoiceProfile: {
            http: {
              method: 'GET',
              requestUri: '/voice-profiles/{VoiceProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileId'],
              members: {
                VoiceProfileId: {
                  location: 'uri',
                  locationName: 'VoiceProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          GetVoiceProfileDomain: {
            http: {
              method: 'GET',
              requestUri: '/voice-profile-domains/{VoiceProfileDomainId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileDomainId'],
              members: {
                VoiceProfileDomainId: {
                  location: 'uri',
                  locationName: 'VoiceProfileDomainId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfileDomain: {
                  shape: 'S2t'
                }
              }
            }
          },
          GetVoiceToneAnalysisTask: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'VoiceToneAnalysisTaskId', 'IsCaller'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                VoiceToneAnalysisTaskId: {
                  location: 'uri',
                  locationName: 'VoiceToneAnalysisTaskId'
                },
                IsCaller: {
                  location: 'querystring',
                  locationName: 'isCaller',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceToneAnalysisTask: {
                  shape: 'S5t'
                }
              }
            }
          },
          ListAvailableVoiceConnectorRegions: {
            http: {
              method: 'GET',
              requestUri: '/voice-connector-regions',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorRegions: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListPhoneNumberOrders: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-orders',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberOrders: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPhoneNumbers: {
            http: {
              method: 'GET',
              requestUri: '/phone-numbers'
            },
            input: {
              type: 'structure',
              members: {
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                ProductType: {
                  location: 'querystring',
                  locationName: 'product-type'
                },
                FilterName: {
                  location: 'querystring',
                  locationName: 'filter-name'
                },
                FilterValue: {
                  location: 'querystring',
                  locationName: 'filter-value'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumbers: {
                  type: 'list',
                  member: {
                    shape: 'S3h'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProxySessions: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySessions: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSipMediaApplications: {
            http: {
              method: 'GET',
              requestUri: '/sip-media-applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplications: {
                  type: 'list',
                  member: {
                    shape: 'S1q'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSipRules: {
            http: {
              method: 'GET',
              requestUri: '/sip-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SipMediaApplicationId: {
                  location: 'querystring',
                  locationName: 'sip-media-application'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRules: {
                  type: 'list',
                  member: {
                    shape: 'S24'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSupportedPhoneNumberCountries: {
            http: {
              method: 'GET',
              requestUri: '/phone-number-countries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProductType'],
              members: {
                ProductType: {
                  location: 'querystring',
                  locationName: 'product-type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumberCountries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CountryCode: {},
                      SupportedPhoneNumberTypes: {
                        type: 'list',
                        member: {}
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
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  shape: 'S2m',
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S1l'
                }
              }
            }
          },
          ListVoiceConnectorGroups: {
            http: {
              method: 'GET',
              requestUri: '/voice-connector-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVoiceConnectorTerminationCredentials: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Usernames: {
                  shape: 'S36'
                }
              }
            }
          },
          ListVoiceConnectors: {
            http: {
              method: 'GET',
              requestUri: '/voice-connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectors: {
                  type: 'list',
                  member: {
                    shape: 'S2a'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVoiceProfileDomains: {
            http: {
              method: 'GET',
              requestUri: '/voice-profile-domains',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfileDomains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VoiceProfileDomainId: {},
                      VoiceProfileDomainArn: {
                        shape: 'S2m'
                      },
                      Name: {},
                      Description: {},
                      CreatedTimestamp: {
                        shape: 'Sx'
                      },
                      UpdatedTimestamp: {
                        shape: 'Sx'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVoiceProfiles: {
            http: {
              method: 'GET',
              requestUri: '/voice-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileDomainId'],
              members: {
                VoiceProfileDomainId: {
                  location: 'querystring',
                  locationName: 'voice-profile-domain-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VoiceProfileId: {},
                      VoiceProfileArn: {
                        shape: 'S2m'
                      },
                      VoiceProfileDomainId: {},
                      CreatedTimestamp: {
                        shape: 'Sx'
                      },
                      UpdatedTimestamp: {
                        shape: 'Sx'
                      },
                      ExpirationTimestamp: {
                        shape: 'Sx'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutSipMediaApplicationAlexaSkillConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/alexa-skill-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                SipMediaApplicationAlexaSkillConfiguration: {
                  shape: 'S3z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationAlexaSkillConfiguration: {
                  shape: 'S3z'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to the Alexa Smart Properties page(https://developer.amazon.com/en-US/alexa/alexasmartproperties).'
          },
          PutSipMediaApplicationLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S45'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationLoggingConfiguration: {
                  shape: 'S45'
                }
              }
            }
          },
          PutVoiceConnectorEmergencyCallingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/emergency-calling-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'EmergencyCallingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                EmergencyCallingConfiguration: {
                  shape: 'S4k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmergencyCallingConfiguration: {
                  shape: 'S4k'
                }
              }
            }
          },
          PutVoiceConnectorLoggingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/logging-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'LoggingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                LoggingConfiguration: {
                  shape: 'S4r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingConfiguration: {
                  shape: 'S4r'
                }
              }
            }
          },
          PutVoiceConnectorOrigination: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/origination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Origination'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Origination: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Origination: {
                  shape: 'S4u'
                }
              }
            }
          },
          PutVoiceConnectorProxy: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/programmable-numbers/proxy'
            },
            input: {
              type: 'structure',
              required: ['DefaultSessionExpiryMinutes', 'PhoneNumberPoolCountries', 'VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                DefaultSessionExpiryMinutes: {
                  type: 'integer'
                },
                PhoneNumberPoolCountries: {
                  type: 'list',
                  member: {}
                },
                FallBackPhoneNumber: {
                  shape: 'S4'
                },
                Disabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Proxy: {
                  shape: 'S53'
                }
              }
            }
          },
          PutVoiceConnectorStreamingConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/streaming-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'StreamingConfiguration'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                StreamingConfiguration: {
                  shape: 'S58'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingConfiguration: {
                  shape: 'S58'
                }
              }
            }
          },
          PutVoiceConnectorTermination: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}/termination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Termination'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Termination: {
                  shape: 'S5g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Termination: {
                  shape: 'S5g'
                }
              }
            }
          },
          PutVoiceConnectorTerminationCredentials: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/termination/credentials?operation=put',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Credentials: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Username: {
                        shape: 'S1t'
                      },
                      Password: {
                        shape: 'S1t'
                      }
                    }
                  }
                }
              }
            }
          },
          RestorePhoneNumber: {
            http: {
              requestUri: '/phone-numbers/{phoneNumberId}?operation=restore',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  shape: 'S9',
                  location: 'uri',
                  locationName: 'phoneNumberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S3h'
                }
              }
            }
          },
          SearchAvailablePhoneNumbers: {
            http: {
              method: 'GET',
              requestUri: '/search?type=phone-numbers'
            },
            input: {
              type: 'structure',
              members: {
                AreaCode: {
                  location: 'querystring',
                  locationName: 'area-code'
                },
                City: {
                  location: 'querystring',
                  locationName: 'city'
                },
                Country: {
                  location: 'querystring',
                  locationName: 'country'
                },
                State: {
                  location: 'querystring',
                  locationName: 'state'
                },
                TollFreePrefix: {
                  location: 'querystring',
                  locationName: 'toll-free-prefix'
                },
                PhoneNumberType: {
                  location: 'querystring',
                  locationName: 'phone-number-type'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                E164PhoneNumbers: {
                  shape: 'S3'
                },
                NextToken: {}
              }
            }
          },
          StartSpeakerSearchTask: {
            http: {
              requestUri: '/voice-connectors/{VoiceConnectorId}/speaker-search-tasks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'TransactionId', 'VoiceProfileDomainId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                TransactionId: {},
                VoiceProfileDomainId: {},
                ClientRequestToken: {},
                CallLeg: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SpeakerSearchTask: {
                  shape: 'S4a'
                }
              }
            }
          },
          StartVoiceToneAnalysisTask: {
            http: {
              requestUri: '/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'TransactionId', 'LanguageCode'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                TransactionId: {},
                LanguageCode: {},
                ClientRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceToneAnalysisTask: {
                  shape: 'S5t'
                }
              }
            }
          },
          StopSpeakerSearchTask: {
            http: {
              requestUri: '/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'SpeakerSearchTaskId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                SpeakerSearchTaskId: {
                  location: 'uri',
                  locationName: 'SpeakerSearchTaskId'
                }
              }
            }
          },
          StopVoiceToneAnalysisTask: {
            http: {
              requestUri: '/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'VoiceToneAnalysisTaskId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'VoiceConnectorId'
                },
                VoiceToneAnalysisTaskId: {
                  location: 'uri',
                  locationName: 'VoiceToneAnalysisTaskId'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags?operation=tag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {
                  shape: 'S2m'
                },
                Tags: {
                  shape: 'S1l'
                }
              }
            }
          },
          UntagResource: {
            http: {
              requestUri: '/tags?operation=untag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {
                  shape: 'S2m'
                },
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'S1n'
                  }
                }
              }
            }
          },
          UpdateGlobalSettings: {
            http: {
              method: 'PUT',
              requestUri: '/settings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S3e'
                }
              }
            }
          },
          UpdatePhoneNumber: {
            http: {
              requestUri: '/phone-numbers/{phoneNumberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PhoneNumberId'],
              members: {
                PhoneNumberId: {
                  shape: 'S9',
                  location: 'uri',
                  locationName: 'phoneNumberId'
                },
                ProductType: {},
                CallingName: {
                  shape: 'Sl'
                },
                Name: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PhoneNumber: {
                  shape: 'S3h'
                }
              }
            }
          },
          UpdatePhoneNumberSettings: {
            http: {
              method: 'PUT',
              requestUri: '/settings/phone-number',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['CallingName'],
              members: {
                CallingName: {
                  shape: 'Sl'
                }
              }
            }
          },
          UpdateProxySession: {
            http: {
              requestUri: '/voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Capabilities', 'VoiceConnectorId', 'ProxySessionId'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                ProxySessionId: {
                  location: 'uri',
                  locationName: 'proxySessionId'
                },
                Capabilities: {
                  shape: 'S13'
                },
                ExpiryMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProxySession: {
                  shape: 'S1b'
                }
              }
            }
          },
          UpdateSipMediaApplication: {
            http: {
              method: 'PUT',
              requestUri: '/sip-media-applications/{sipMediaApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                Name: {},
                Endpoints: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplication: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateSipMediaApplicationCall: {
            http: {
              requestUri: '/sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['SipMediaApplicationId', 'TransactionId', 'Arguments'],
              members: {
                SipMediaApplicationId: {
                  location: 'uri',
                  locationName: 'sipMediaApplicationId'
                },
                TransactionId: {
                  location: 'uri',
                  locationName: 'transactionId'
                },
                Arguments: {
                  type: 'map',
                  key: {
                    shape: 'S1t'
                  },
                  value: {
                    shape: 'S1t'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipMediaApplicationCall: {
                  shape: 'S1w'
                }
              }
            }
          },
          UpdateSipRule: {
            http: {
              method: 'PUT',
              requestUri: '/sip-rules/{sipRuleId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['SipRuleId', 'Name'],
              members: {
                SipRuleId: {
                  location: 'uri',
                  locationName: 'sipRuleId'
                },
                Name: {},
                Disabled: {
                  type: 'boolean'
                },
                TargetApplications: {
                  shape: 'S20'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SipRule: {
                  shape: 'S24'
                }
              }
            }
          },
          UpdateVoiceConnector: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connectors/{voiceConnectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Name', 'RequireEncryption'],
              members: {
                VoiceConnectorId: {
                  location: 'uri',
                  locationName: 'voiceConnectorId'
                },
                Name: {},
                RequireEncryption: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnector: {
                  shape: 'S2a'
                }
              }
            }
          },
          UpdateVoiceConnectorGroup: {
            http: {
              method: 'PUT',
              requestUri: '/voice-connector-groups/{voiceConnectorGroupId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['VoiceConnectorGroupId', 'Name', 'VoiceConnectorItems'],
              members: {
                VoiceConnectorGroupId: {
                  location: 'uri',
                  locationName: 'voiceConnectorGroupId'
                },
                Name: {},
                VoiceConnectorItems: {
                  shape: 'S2d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceConnectorGroup: {
                  shape: 'S2h'
                }
              }
            }
          },
          UpdateVoiceProfile: {
            http: {
              method: 'PUT',
              requestUri: '/voice-profiles/{VoiceProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileId', 'SpeakerSearchTaskId'],
              members: {
                VoiceProfileId: {
                  location: 'uri',
                  locationName: 'VoiceProfileId'
                },
                SpeakerSearchTaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          UpdateVoiceProfileDomain: {
            http: {
              method: 'PUT',
              requestUri: '/voice-profile-domains/{VoiceProfileDomainId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['VoiceProfileDomainId'],
              members: {
                VoiceProfileDomainId: {
                  location: 'uri',
                  locationName: 'VoiceProfileDomainId'
                },
                Name: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VoiceProfileDomain: {
                  shape: 'S2t'
                }
              }
            }
          },
          ValidateE911Address: {
            http: {
              requestUri: '/emergency-calling/address',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'StreetNumber', 'StreetInfo', 'City', 'State', 'Country', 'PostalCode'],
              members: {
                AwsAccountId: {},
                StreetNumber: {
                  shape: 'S9'
                },
                StreetInfo: {
                  shape: 'S9'
                },
                City: {
                  shape: 'S9'
                },
                State: {
                  shape: 'S9'
                },
                Country: {
                  shape: 'S9'
                },
                PostalCode: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ValidationResult: {
                  type: 'integer'
                },
                AddressExternalId: {},
                Address: {
                  type: 'structure',
                  members: {
                    streetName: {
                      shape: 'S9'
                    },
                    streetSuffix: {
                      shape: 'S9'
                    },
                    postDirectional: {
                      shape: 'S9'
                    },
                    preDirectional: {
                      shape: 'S9'
                    },
                    streetNumber: {
                      shape: 'S9'
                    },
                    city: {
                      shape: 'S9'
                    },
                    state: {
                      shape: 'S9'
                    },
                    postalCode: {
                      shape: 'S9'
                    },
                    postalCodePlus4: {
                      shape: 'S9'
                    },
                    country: {
                      shape: 'S9'
                    }
                  }
                },
                CandidateAddressList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      streetInfo: {
                        shape: 'S9'
                      },
                      streetNumber: {
                        shape: 'S9'
                      },
                      city: {
                        shape: 'S9'
                      },
                      state: {
                        shape: 'S9'
                      },
                      postalCode: {
                        shape: 'S9'
                      },
                      postalCodePlus4: {
                        shape: 'S9'
                      },
                      country: {
                        shape: 'S9'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              shape: 'S4'
            }
          },
          S4: {
            type: 'string',
            sensitive: true
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PhoneNumberId: {
                  shape: 'S9'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S9: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'string',
            sensitive: true
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sq: {
            type: 'structure',
            members: {
              PhoneNumberOrderId: {},
              ProductType: {},
              Status: {},
              OrderType: {},
              OrderedPhoneNumbers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    E164PhoneNumber: {
                      shape: 'S4'
                    },
                    Status: {}
                  }
                }
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              }
            }
          },
          Sx: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S13: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'structure',
            required: ['Country', 'AreaCode'],
            members: {
              Country: {},
              AreaCode: {}
            }
          },
          S1b: {
            type: 'structure',
            members: {
              VoiceConnectorId: {},
              ProxySessionId: {},
              Name: {},
              Status: {},
              ExpiryMinutes: {
                type: 'integer'
              },
              Capabilities: {
                shape: 'S13'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              EndedTimestamp: {
                shape: 'Sx'
              },
              Participants: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PhoneNumber: {
                      shape: 'S4'
                    },
                    ProxyPhoneNumber: {
                      shape: 'S4'
                    }
                  }
                }
              },
              NumberSelectionBehavior: {},
              GeoMatchLevel: {},
              GeoMatchParams: {
                shape: 'S17'
              }
            }
          },
          S1i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LambdaArn: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'S1n'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S1n: {
            type: 'string',
            sensitive: true
          },
          S1q: {
            type: 'structure',
            members: {
              SipMediaApplicationId: {},
              AwsRegion: {},
              Name: {},
              Endpoints: {
                shape: 'S1i'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              SipMediaApplicationArn: {}
            }
          },
          S1t: {
            type: 'string',
            sensitive: true
          },
          S1w: {
            type: 'structure',
            members: {
              TransactionId: {}
            }
          },
          S20: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SipMediaApplicationId: {},
                Priority: {
                  type: 'integer'
                },
                AwsRegion: {}
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              SipRuleId: {},
              Name: {},
              Disabled: {
                type: 'boolean'
              },
              TriggerType: {},
              TriggerValue: {},
              TargetApplications: {
                shape: 'S20'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              VoiceConnectorId: {},
              AwsRegion: {},
              Name: {},
              OutboundHostName: {},
              RequireEncryption: {
                type: 'boolean'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              VoiceConnectorArn: {}
            }
          },
          S2d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['VoiceConnectorId', 'Priority'],
              members: {
                VoiceConnectorId: {},
                Priority: {
                  type: 'integer'
                }
              }
            }
          },
          S2h: {
            type: 'structure',
            members: {
              VoiceConnectorGroupId: {},
              Name: {},
              VoiceConnectorItems: {
                shape: 'S2d'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              VoiceConnectorGroupArn: {}
            }
          },
          S2l: {
            type: 'structure',
            members: {
              VoiceProfileId: {},
              VoiceProfileArn: {
                shape: 'S2m'
              },
              VoiceProfileDomainId: {},
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              ExpirationTimestamp: {
                shape: 'Sx'
              }
            }
          },
          S2m: {
            type: 'string',
            sensitive: true
          },
          S2q: {
            type: 'structure',
            required: ['KmsKeyArn'],
            members: {
              KmsKeyArn: {
                shape: 'S2m'
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              VoiceProfileDomainId: {},
              VoiceProfileDomainArn: {
                shape: 'S2m'
              },
              Name: {},
              Description: {},
              ServerSideEncryptionConfiguration: {
                shape: 'S2q'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              }
            }
          },
          S36: {
            type: 'list',
            member: {
              shape: 'S1t'
            }
          },
          S3e: {
            type: 'structure',
            members: {
              CdrBucket: {}
            }
          },
          S3h: {
            type: 'structure',
            members: {
              PhoneNumberId: {
                shape: 'S9'
              },
              E164PhoneNumber: {
                shape: 'S4'
              },
              Country: {},
              Type: {},
              ProductType: {},
              Status: {},
              Capabilities: {
                type: 'structure',
                members: {
                  InboundCall: {
                    type: 'boolean'
                  },
                  OutboundCall: {
                    type: 'boolean'
                  },
                  InboundSMS: {
                    type: 'boolean'
                  },
                  OutboundSMS: {
                    type: 'boolean'
                  },
                  InboundMMS: {
                    type: 'boolean'
                  },
                  OutboundMMS: {
                    type: 'boolean'
                  }
                }
              },
              Associations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Value: {},
                    Name: {},
                    AssociatedTimestamp: {
                      shape: 'Sx'
                    }
                  }
                }
              },
              CallingName: {
                shape: 'Sl'
              },
              CallingNameStatus: {},
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              DeletionTimestamp: {
                shape: 'Sx'
              },
              OrderId: {},
              Name: {
                shape: 'Sm'
              }
            }
          },
          S3z: {
            type: 'structure',
            required: ['AlexaSkillStatus', 'AlexaSkillIds'],
            members: {
              AlexaSkillStatus: {},
              AlexaSkillIds: {
                type: 'list',
                member: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S45: {
            type: 'structure',
            members: {
              EnableSipMediaApplicationMessageLogs: {
                type: 'boolean'
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              SpeakerSearchTaskId: {},
              SpeakerSearchTaskStatus: {},
              CallDetails: {
                shape: 'S4b'
              },
              SpeakerSearchDetails: {
                type: 'structure',
                members: {
                  Results: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        ConfidenceScore: {
                          type: 'float'
                        },
                        VoiceProfileId: {}
                      }
                    }
                  },
                  VoiceprintGenerationStatus: {}
                }
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              StartedTimestamp: {
                shape: 'Sx'
              },
              StatusMessage: {}
            }
          },
          S4b: {
            type: 'structure',
            members: {
              VoiceConnectorId: {},
              TransactionId: {},
              IsCaller: {
                type: 'boolean'
              }
            }
          },
          S4k: {
            type: 'structure',
            members: {
              DNIS: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['EmergencyPhoneNumber', 'CallingCountry'],
                  members: {
                    EmergencyPhoneNumber: {
                      shape: 'S4'
                    },
                    TestPhoneNumber: {
                      shape: 'S4'
                    },
                    CallingCountry: {}
                  }
                }
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              EnableSIPLogs: {
                type: 'boolean'
              },
              EnableMediaMetricLogs: {
                type: 'boolean'
              }
            }
          },
          S4u: {
            type: 'structure',
            members: {
              Routes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Host: {},
                    Port: {
                      type: 'integer'
                    },
                    Protocol: {},
                    Priority: {
                      type: 'integer'
                    },
                    Weight: {
                      type: 'integer'
                    }
                  }
                }
              },
              Disabled: {
                type: 'boolean'
              }
            }
          },
          S53: {
            type: 'structure',
            members: {
              DefaultSessionExpiryMinutes: {
                type: 'integer'
              },
              Disabled: {
                type: 'boolean'
              },
              FallBackPhoneNumber: {
                shape: 'S4'
              },
              PhoneNumberCountries: {
                shape: 'S55'
              }
            }
          },
          S55: {
            type: 'list',
            member: {}
          },
          S58: {
            type: 'structure',
            required: ['DataRetentionInHours', 'Disabled'],
            members: {
              DataRetentionInHours: {
                type: 'integer'
              },
              Disabled: {
                type: 'boolean'
              },
              StreamingNotificationTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    NotificationTarget: {}
                  }
                }
              },
              MediaInsightsConfiguration: {
                type: 'structure',
                members: {
                  Disabled: {
                    type: 'boolean'
                  },
                  ConfigurationArn: {
                    shape: 'S2m'
                  }
                }
              }
            }
          },
          S5g: {
            type: 'structure',
            members: {
              CpsLimit: {
                type: 'integer'
              },
              DefaultPhoneNumber: {
                shape: 'S4'
              },
              CallingRegions: {
                type: 'list',
                member: {}
              },
              CidrAllowedList: {
                shape: 'S55'
              },
              Disabled: {
                type: 'boolean'
              }
            }
          },
          S5t: {
            type: 'structure',
            members: {
              VoiceToneAnalysisTaskId: {},
              VoiceToneAnalysisTaskStatus: {},
              CallDetails: {
                shape: 'S4b'
              },
              CreatedTimestamp: {
                shape: 'Sx'
              },
              UpdatedTimestamp: {
                shape: 'Sx'
              },
              StartedTimestamp: {
                shape: 'Sx'
              },
              StatusMessage: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bf086a671dd700e19b81c3c78365cb415cd888d6.js.map