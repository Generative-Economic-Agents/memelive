System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-01',
          endpointPrefix: 'nimble',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AmazonNimbleStudio',
          serviceId: 'nimble',
          signatureVersion: 'v4',
          signingName: 'nimble',
          uid: 'nimble-2020-08-01'
        },
        operations: {
          AcceptEulas: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/eula-acceptances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                eulaIds: {
                  shape: 'S3'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eulaAcceptances: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateLaunchProfile: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ec2SubnetIds', 'launchProfileProtocolVersions', 'name', 'streamConfiguration', 'studioComponentIds', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'Sc'
                },
                ec2SubnetIds: {
                  shape: 'Sd'
                },
                launchProfileProtocolVersions: {
                  shape: 'Sf'
                },
                name: {
                  shape: 'Sh'
                },
                streamConfiguration: {
                  shape: 'Si'
                },
                studioComponentIds: {
                  shape: 'S15'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfile: {
                  shape: 'S18'
                }
              }
            }
          },
          CreateStreamingImage: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/streaming-images',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ec2ImageId', 'name', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'S1k'
                },
                ec2ImageId: {},
                name: {
                  shape: 'S1m'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamingImage: {
                  shape: 'S1o'
                }
              }
            }
          },
          CreateStreamingSession: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                ec2InstanceType: {},
                launchProfileId: {},
                ownedBy: {},
                streamingImageId: {},
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1y'
                }
              }
            }
          },
          CreateStreamingSessionStream: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                expirationInSeconds: {
                  type: 'integer'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stream: {
                  shape: 'S26'
                }
              }
            },
            idempotent: true
          },
          CreateStudio: {
            http: {
              requestUri: '/2020-08-01/studios',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['adminRoleArn', 'displayName', 'studioName', 'userRoleArn'],
              members: {
                adminRoleArn: {},
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                displayName: {
                  shape: 'S2c'
                },
                studioEncryptionConfiguration: {
                  shape: 'S2d'
                },
                studioName: {},
                tags: {
                  shape: 'S16'
                },
                userRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                studio: {
                  shape: 'S2i'
                }
              }
            }
          },
          CreateStudioComponent: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/studio-components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'studioId', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                configuration: {
                  shape: 'S2n'
                },
                description: {
                  shape: 'S30'
                },
                ec2SecurityGroupIds: {
                  shape: 'S31'
                },
                initializationScripts: {
                  shape: 'S33'
                },
                name: {
                  shape: 'S38'
                },
                runtimeRoleArn: {},
                scriptParameters: {
                  shape: 'S39'
                },
                secureInitializationRoleArn: {},
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                subtype: {},
                tags: {
                  shape: 'S16'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                studioComponent: {
                  shape: 'S3g'
                }
              }
            }
          },
          DeleteLaunchProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfile: {
                  shape: 'S18'
                }
              }
            },
            idempotent: true
          },
          DeleteLaunchProfileMember: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'principalId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteStreamingImage: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['streamingImageId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                streamingImageId: {
                  location: 'uri',
                  locationName: 'streamingImageId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamingImage: {
                  shape: 'S1o'
                }
              }
            },
            idempotent: true
          },
          DeleteStreamingSession: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1y'
                }
              }
            },
            idempotent: true
          },
          DeleteStudio: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['studio'],
              members: {
                studio: {
                  shape: 'S2i'
                }
              }
            },
            idempotent: true
          },
          DeleteStudioComponent: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioComponentId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                studioComponentId: {
                  location: 'uri',
                  locationName: 'studioComponentId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                studioComponent: {
                  shape: 'S3g'
                }
              }
            },
            idempotent: true
          },
          DeleteStudioMember: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-08-01/studios/{studioId}/membership/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['principalId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetEula: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/eulas/{eulaId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['eulaId'],
              members: {
                eulaId: {
                  location: 'uri',
                  locationName: 'eulaId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eula: {
                  shape: 'S40'
                }
              }
            }
          },
          GetLaunchProfile: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfile: {
                  shape: 'S18'
                }
              }
            }
          },
          GetLaunchProfileDetails: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfile: {
                  shape: 'S18'
                },
                streamingImages: {
                  shape: 'S46'
                },
                studioComponentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        shape: 'S8'
                      },
                      createdBy: {},
                      description: {
                        shape: 'S30'
                      },
                      name: {
                        shape: 'S38'
                      },
                      studioComponentId: {},
                      subtype: {},
                      type: {},
                      updatedAt: {
                        shape: 'S8'
                      },
                      updatedBy: {}
                    }
                  }
                }
              }
            }
          },
          GetLaunchProfileInitialization: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'launchProfileProtocolVersions', 'launchPurpose', 'platform', 'studioId'],
              members: {
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                launchProfileProtocolVersions: {
                  shape: 'S4a',
                  location: 'querystring',
                  locationName: 'launchProfileProtocolVersions'
                },
                launchPurpose: {
                  location: 'querystring',
                  locationName: 'launchPurpose'
                },
                platform: {
                  location: 'querystring',
                  locationName: 'platform'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfileInitialization: {
                  type: 'structure',
                  members: {
                    activeDirectory: {
                      type: 'structure',
                      members: {
                        computerAttributes: {
                          shape: 'S2p'
                        },
                        directoryId: {},
                        directoryName: {},
                        dnsIpAddresses: {
                          type: 'list',
                          member: {}
                        },
                        organizationalUnitDistinguishedName: {},
                        studioComponentId: {},
                        studioComponentName: {
                          shape: 'S38'
                        }
                      }
                    },
                    ec2SecurityGroupIds: {
                      type: 'list',
                      member: {}
                    },
                    launchProfileId: {},
                    launchProfileProtocolVersion: {},
                    launchPurpose: {},
                    name: {
                      shape: 'Sh'
                    },
                    platform: {},
                    systemInitializationScripts: {
                      shape: 'S4i'
                    },
                    userInitializationScripts: {
                      shape: 'S4i'
                    }
                  }
                }
              }
            }
          },
          GetLaunchProfileMember: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'principalId', 'studioId'],
              members: {
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                member: {
                  shape: 'S4m'
                }
              }
            }
          },
          GetStreamingImage: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['streamingImageId', 'studioId'],
              members: {
                streamingImageId: {
                  location: 'uri',
                  locationName: 'streamingImageId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamingImage: {
                  shape: 'S1o'
                }
              }
            }
          },
          GetStreamingSession: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'studioId'],
              members: {
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1y'
                }
              }
            }
          },
          GetStreamingSessionBackup: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-session-backups/{backupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['backupId', 'studioId'],
              members: {
                backupId: {
                  location: 'uri',
                  locationName: 'backupId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamingSessionBackup: {
                  shape: 'S4u'
                }
              }
            }
          },
          GetStreamingSessionStream: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'streamId', 'studioId'],
              members: {
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                streamId: {
                  location: 'uri',
                  locationName: 'streamId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stream: {
                  shape: 'S26'
                }
              }
            }
          },
          GetStudio: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['studio'],
              members: {
                studio: {
                  shape: 'S2i'
                }
              }
            }
          },
          GetStudioComponent: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioComponentId', 'studioId'],
              members: {
                studioComponentId: {
                  location: 'uri',
                  locationName: 'studioComponentId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                studioComponent: {
                  shape: 'S3g'
                }
              }
            }
          },
          GetStudioMember: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/membership/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['principalId', 'studioId'],
              members: {
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                member: {
                  shape: 'S53'
                }
              }
            }
          },
          ListEulaAcceptances: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/eula-acceptances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                eulaIds: {
                  shape: 'S4a',
                  location: 'querystring',
                  locationName: 'eulaIds'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eulaAcceptances: {
                  shape: 'S6'
                },
                nextToken: {}
              }
            }
          },
          ListEulas: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/eulas',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                eulaIds: {
                  shape: 'S4a',
                  location: 'querystring',
                  locationName: 'eulaIds'
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
                eulas: {
                  type: 'list',
                  member: {
                    shape: 'S40'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLaunchProfileMembers: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
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
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                members: {
                  type: 'list',
                  member: {
                    shape: 'S4m'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLaunchProfiles: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
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
                principalId: {
                  location: 'querystring',
                  locationName: 'principalId'
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfiles: {
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStreamingImages: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-images',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                owner: {
                  location: 'querystring',
                  locationName: 'owner'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                streamingImages: {
                  shape: 'S46'
                }
              }
            }
          },
          ListStreamingSessionBackups: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-session-backups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ownedBy: {
                  location: 'querystring',
                  locationName: 'ownedBy'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                streamingSessionBackups: {
                  type: 'list',
                  member: {
                    shape: 'S4u'
                  }
                }
              }
            }
          },
          ListStreamingSessions: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                createdBy: {
                  location: 'querystring',
                  locationName: 'createdBy'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ownedBy: {
                  location: 'querystring',
                  locationName: 'ownedBy'
                },
                sessionIds: {
                  location: 'querystring',
                  locationName: 'sessionIds'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                sessions: {
                  type: 'list',
                  member: {
                    shape: 'S1y'
                  }
                }
              }
            }
          },
          ListStudioComponents: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/studio-components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
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
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                types: {
                  location: 'querystring',
                  locationName: 'types',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                studioComponents: {
                  type: 'list',
                  member: {
                    shape: 'S3g'
                  }
                }
              }
            }
          },
          ListStudioMembers: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios/{studioId}/membership',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
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
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                members: {
                  type: 'list',
                  member: {
                    shape: 'S53'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStudios: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/studios',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['studios'],
              members: {
                nextToken: {},
                studios: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2020-08-01/tags/{resourceArn}',
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
                  shape: 'S16'
                }
              }
            }
          },
          PutLaunchProfileMembers: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityStoreId', 'launchProfileId', 'members', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                identityStoreId: {},
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['persona', 'principalId'],
                    members: {
                      persona: {},
                      principalId: {}
                    }
                  }
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutStudioMembers: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/membership',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityStoreId', 'members', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                identityStoreId: {},
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['persona', 'principalId'],
                    members: {
                      persona: {},
                      principalId: {}
                    }
                  }
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartStreamingSession: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'studioId'],
              members: {
                backupId: {},
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1y'
                }
              }
            },
            idempotent: true
          },
          StartStudioSSOConfigurationRepair: {
            http: {
              method: 'PUT',
              requestUri: '/2020-08-01/studios/{studioId}/sso-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['studio'],
              members: {
                studio: {
                  shape: 'S2i'
                }
              }
            },
            idempotent: true
          },
          StopStreamingSession: {
            http: {
              requestUri: '/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sessionId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                sessionId: {
                  location: 'uri',
                  locationName: 'sessionId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                volumeRetentionMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                session: {
                  shape: 'S1y'
                }
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/2020-08-01/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S16'
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
              requestUri: '/2020-08-01/tags/{resourceArn}',
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
                  shape: 'S4a',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateLaunchProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'Sc'
                },
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                launchProfileProtocolVersions: {
                  shape: 'Sf'
                },
                name: {
                  shape: 'Sh'
                },
                streamConfiguration: {
                  shape: 'Si'
                },
                studioComponentIds: {
                  shape: 'S15'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launchProfile: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateLaunchProfileMember: {
            http: {
              method: 'PATCH',
              requestUri: '/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launchProfileId', 'persona', 'principalId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                launchProfileId: {
                  location: 'uri',
                  locationName: 'launchProfileId'
                },
                persona: {},
                principalId: {
                  location: 'uri',
                  locationName: 'principalId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                member: {
                  shape: 'S4m'
                }
              }
            }
          },
          UpdateStreamingImage: {
            http: {
              method: 'PATCH',
              requestUri: '/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['streamingImageId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                description: {
                  shape: 'S1k'
                },
                name: {
                  shape: 'S1m'
                },
                streamingImageId: {
                  location: 'uri',
                  locationName: 'streamingImageId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                streamingImage: {
                  shape: 'S1o'
                }
              }
            }
          },
          UpdateStudio: {
            http: {
              method: 'PATCH',
              requestUri: '/2020-08-01/studios/{studioId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioId'],
              members: {
                adminRoleArn: {},
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                displayName: {
                  shape: 'S2c'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                userRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['studio'],
              members: {
                studio: {
                  shape: 'S2i'
                }
              }
            }
          },
          UpdateStudioComponent: {
            http: {
              method: 'PATCH',
              requestUri: '/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['studioComponentId', 'studioId'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amz-Client-Token'
                },
                configuration: {
                  shape: 'S2n'
                },
                description: {
                  shape: 'S30'
                },
                ec2SecurityGroupIds: {
                  shape: 'S31'
                },
                initializationScripts: {
                  shape: 'S33'
                },
                name: {
                  shape: 'S38'
                },
                runtimeRoleArn: {},
                scriptParameters: {
                  shape: 'S39'
                },
                secureInitializationRoleArn: {},
                studioComponentId: {
                  location: 'uri',
                  locationName: 'studioComponentId'
                },
                studioId: {
                  location: 'uri',
                  locationName: 'studioId'
                },
                subtype: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                studioComponent: {
                  shape: 'S3g'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                acceptedAt: {
                  shape: 'S8'
                },
                acceptedBy: {},
                accepteeId: {},
                eulaAcceptanceId: {},
                eulaId: {}
              }
            }
          },
          S8: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sc: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'structure',
            required: ['clipboardMode', 'ec2InstanceTypes', 'streamingImageIds'],
            members: {
              automaticTerminationMode: {},
              clipboardMode: {},
              ec2InstanceTypes: {
                shape: 'Sl'
              },
              maxSessionLengthInMinutes: {
                type: 'integer'
              },
              maxStoppedSessionLengthInMinutes: {
                type: 'integer'
              },
              sessionBackup: {
                shape: 'Sp'
              },
              sessionPersistenceMode: {},
              sessionStorage: {
                shape: 'St'
              },
              streamingImageIds: {
                shape: 'Sz'
              },
              volumeConfiguration: {
                shape: 'S11'
              }
            }
          },
          Sl: {
            type: 'list',
            member: {}
          },
          Sp: {
            type: 'structure',
            members: {
              maxBackupsToRetain: {
                type: 'integer'
              },
              mode: {}
            }
          },
          St: {
            type: 'structure',
            required: ['mode'],
            members: {
              mode: {
                type: 'list',
                member: {}
              },
              root: {
                type: 'structure',
                members: {
                  linux: {
                    type: 'string',
                    sensitive: true
                  },
                  windows: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S11: {
            type: 'structure',
            members: {
              iops: {
                type: 'integer'
              },
              size: {
                type: 'integer'
              },
              throughput: {
                type: 'integer'
              }
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S18: {
            type: 'structure',
            members: {
              arn: {},
              createdAt: {
                shape: 'S8'
              },
              createdBy: {},
              description: {
                shape: 'Sc'
              },
              ec2SubnetIds: {
                shape: 'Sd'
              },
              launchProfileId: {},
              launchProfileProtocolVersions: {
                shape: 'Sf'
              },
              name: {
                shape: 'Sh'
              },
              state: {},
              statusCode: {},
              statusMessage: {},
              streamConfiguration: {
                type: 'structure',
                required: ['clipboardMode', 'ec2InstanceTypes', 'streamingImageIds'],
                members: {
                  automaticTerminationMode: {},
                  clipboardMode: {},
                  ec2InstanceTypes: {
                    shape: 'Sl'
                  },
                  maxSessionLengthInMinutes: {
                    type: 'integer'
                  },
                  maxStoppedSessionLengthInMinutes: {
                    type: 'integer'
                  },
                  sessionBackup: {
                    shape: 'Sp'
                  },
                  sessionPersistenceMode: {},
                  sessionStorage: {
                    shape: 'St'
                  },
                  streamingImageIds: {
                    shape: 'Sz'
                  },
                  volumeConfiguration: {
                    shape: 'S11'
                  }
                }
              },
              studioComponentIds: {
                shape: 'S15'
              },
              tags: {
                shape: 'S16'
              },
              updatedAt: {
                shape: 'S8'
              },
              updatedBy: {},
              validationResults: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['state', 'statusCode', 'statusMessage', 'type'],
                  members: {
                    state: {},
                    statusCode: {},
                    statusMessage: {},
                    type: {}
                  }
                }
              }
            }
          },
          S1k: {
            type: 'string',
            sensitive: true
          },
          S1m: {
            type: 'string',
            sensitive: true
          },
          S1o: {
            type: 'structure',
            members: {
              arn: {},
              description: {
                shape: 'S1k'
              },
              ec2ImageId: {},
              encryptionConfiguration: {
                type: 'structure',
                required: ['keyType'],
                members: {
                  keyArn: {},
                  keyType: {}
                }
              },
              eulaIds: {
                shape: 'S3'
              },
              name: {
                shape: 'S1m'
              },
              owner: {},
              platform: {},
              state: {},
              statusCode: {},
              statusMessage: {},
              streamingImageId: {},
              tags: {
                shape: 'S16'
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              arn: {},
              automaticTerminationMode: {},
              backupMode: {},
              createdAt: {
                shape: 'S8'
              },
              createdBy: {},
              ec2InstanceType: {},
              launchProfileId: {},
              maxBackupsToRetain: {
                type: 'integer'
              },
              ownedBy: {},
              sessionId: {},
              sessionPersistenceMode: {},
              startedAt: {
                shape: 'S8'
              },
              startedBy: {},
              startedFromBackupId: {},
              state: {},
              statusCode: {},
              statusMessage: {},
              stopAt: {
                shape: 'S8'
              },
              stoppedAt: {
                shape: 'S8'
              },
              stoppedBy: {},
              streamingImageId: {},
              tags: {
                shape: 'S16'
              },
              terminateAt: {
                shape: 'S8'
              },
              updatedAt: {
                shape: 'S8'
              },
              updatedBy: {},
              volumeConfiguration: {
                shape: 'S11'
              },
              volumeRetentionMode: {}
            }
          },
          S26: {
            type: 'structure',
            members: {
              createdAt: {
                shape: 'S8'
              },
              createdBy: {},
              expiresAt: {
                shape: 'S8'
              },
              ownedBy: {},
              state: {},
              statusCode: {},
              streamId: {},
              url: {
                shape: 'S29'
              }
            }
          },
          S29: {
            type: 'string',
            sensitive: true
          },
          S2c: {
            type: 'string',
            sensitive: true
          },
          S2d: {
            type: 'structure',
            required: ['keyType'],
            members: {
              keyArn: {},
              keyType: {}
            }
          },
          S2i: {
            type: 'structure',
            members: {
              adminRoleArn: {},
              arn: {},
              createdAt: {
                shape: 'S8'
              },
              displayName: {
                shape: 'S2c'
              },
              homeRegion: {},
              ssoClientId: {},
              state: {},
              statusCode: {},
              statusMessage: {},
              studioEncryptionConfiguration: {
                shape: 'S2d'
              },
              studioId: {},
              studioName: {},
              studioUrl: {},
              tags: {
                shape: 'S16'
              },
              updatedAt: {
                shape: 'S8'
              },
              userRoleArn: {}
            }
          },
          S2n: {
            type: 'structure',
            members: {
              activeDirectoryConfiguration: {
                type: 'structure',
                members: {
                  computerAttributes: {
                    shape: 'S2p'
                  },
                  directoryId: {},
                  organizationalUnitDistinguishedName: {}
                }
              },
              computeFarmConfiguration: {
                type: 'structure',
                members: {
                  activeDirectoryUser: {},
                  endpoint: {
                    shape: 'S29'
                  }
                }
              },
              licenseServiceConfiguration: {
                type: 'structure',
                members: {
                  endpoint: {
                    shape: 'S29'
                  }
                }
              },
              sharedFileSystemConfiguration: {
                type: 'structure',
                members: {
                  endpoint: {
                    shape: 'S29'
                  },
                  fileSystemId: {},
                  linuxMountPoint: {
                    type: 'string',
                    sensitive: true
                  },
                  shareName: {
                    shape: 'S29'
                  },
                  windowsMountDrive: {}
                }
              }
            },
            union: true
          },
          S2p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            },
            sensitive: true
          },
          S30: {
            type: 'string',
            sensitive: true
          },
          S31: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                launchProfileProtocolVersion: {},
                platform: {},
                runContext: {},
                script: {
                  shape: 'S37'
                }
              }
            }
          },
          S37: {
            type: 'string',
            sensitive: true
          },
          S38: {
            type: 'string',
            sensitive: true
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            },
            sensitive: true
          },
          S3g: {
            type: 'structure',
            members: {
              arn: {},
              configuration: {
                shape: 'S2n'
              },
              createdAt: {
                shape: 'S8'
              },
              createdBy: {},
              description: {
                shape: 'S30'
              },
              ec2SecurityGroupIds: {
                shape: 'S31'
              },
              initializationScripts: {
                shape: 'S33'
              },
              name: {
                shape: 'S38'
              },
              runtimeRoleArn: {},
              scriptParameters: {
                shape: 'S39'
              },
              secureInitializationRoleArn: {},
              state: {},
              statusCode: {},
              statusMessage: {},
              studioComponentId: {},
              subtype: {},
              tags: {
                shape: 'S16'
              },
              type: {},
              updatedAt: {
                shape: 'S8'
              },
              updatedBy: {}
            }
          },
          S40: {
            type: 'structure',
            members: {
              content: {},
              createdAt: {
                shape: 'S8'
              },
              eulaId: {},
              name: {},
              updatedAt: {
                shape: 'S8'
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              shape: 'S1o'
            }
          },
          S4a: {
            type: 'list',
            member: {}
          },
          S4i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                runtimeRoleArn: {},
                script: {
                  shape: 'S37'
                },
                secureInitializationRoleArn: {},
                studioComponentId: {},
                studioComponentName: {
                  shape: 'S38'
                }
              }
            }
          },
          S4m: {
            type: 'structure',
            members: {
              identityStoreId: {},
              persona: {},
              principalId: {},
              sid: {}
            }
          },
          S4u: {
            type: 'structure',
            members: {
              arn: {},
              backupId: {},
              createdAt: {
                shape: 'S8'
              },
              launchProfileId: {},
              ownedBy: {},
              sessionId: {},
              state: {},
              statusCode: {},
              statusMessage: {},
              tags: {
                shape: 'S16'
              }
            }
          },
          S53: {
            type: 'structure',
            members: {
              identityStoreId: {},
              persona: {},
              principalId: {},
              sid: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b0b2457d45bf766cce10a284fad0480d9680bf34.js.map