System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'rolesanywhere',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'IAM Roles Anywhere',
          serviceId: 'RolesAnywhere',
          signatureVersion: 'v4',
          signingName: 'rolesanywhere',
          uid: 'rolesanywhere-2018-05-10'
        },
        operations: {
          CreateProfile: {
            http: {
              requestUri: '/profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'roleArns'],
              members: {
                durationSeconds: {
                  type: 'integer'
                },
                enabled: {
                  type: 'boolean'
                },
                managedPolicyArns: {
                  shape: 'S4'
                },
                name: {},
                requireInstanceProperties: {
                  type: 'boolean'
                },
                roleArns: {
                  shape: 'S7'
                },
                sessionPolicy: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              shape: 'Se'
            }
          },
          CreateTrustAnchor: {
            http: {
              requestUri: '/trustanchors',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'source'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                name: {},
                notificationSettings: {
                  shape: 'Sr'
                },
                source: {
                  shape: 'Sw'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              shape: 'S10'
            }
          },
          DeleteAttributeMapping: {
            http: {
              method: 'DELETE',
              requestUri: '/profiles/{profileId}/mappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['certificateField', 'profileId'],
              members: {
                certificateField: {
                  location: 'querystring',
                  locationName: 'certificateField'
                },
                profileId: {
                  location: 'uri',
                  locationName: 'profileId'
                },
                specifiers: {
                  location: 'querystring',
                  locationName: 'specifiers',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profile'],
              members: {
                profile: {
                  shape: 'Sf'
                }
              }
            },
            idempotent: true
          },
          DeleteCrl: {
            http: {
              method: 'DELETE',
              requestUri: '/crl/{crlId}',
              responseCode: 200
            },
            input: {
              shape: 'S19'
            },
            output: {
              shape: 'S1a'
            },
            idempotent: true
          },
          DeleteProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/profile/{profileId}',
              responseCode: 200
            },
            input: {
              shape: 'S1d'
            },
            output: {
              shape: 'Se'
            },
            idempotent: true
          },
          DeleteTrustAnchor: {
            http: {
              method: 'DELETE',
              requestUri: '/trustanchor/{trustAnchorId}',
              responseCode: 200
            },
            input: {
              shape: 'S1e'
            },
            output: {
              shape: 'S10'
            },
            idempotent: true
          },
          DisableCrl: {
            http: {
              requestUri: '/crl/{crlId}/disable',
              responseCode: 200
            },
            input: {
              shape: 'S19'
            },
            output: {
              shape: 'S1a'
            }
          },
          DisableProfile: {
            http: {
              requestUri: '/profile/{profileId}/disable',
              responseCode: 200
            },
            input: {
              shape: 'S1d'
            },
            output: {
              shape: 'Se'
            }
          },
          DisableTrustAnchor: {
            http: {
              requestUri: '/trustanchor/{trustAnchorId}/disable',
              responseCode: 200
            },
            input: {
              shape: 'S1e'
            },
            output: {
              shape: 'S10'
            }
          },
          EnableCrl: {
            http: {
              requestUri: '/crl/{crlId}/enable',
              responseCode: 200
            },
            input: {
              shape: 'S19'
            },
            output: {
              shape: 'S1a'
            }
          },
          EnableProfile: {
            http: {
              requestUri: '/profile/{profileId}/enable',
              responseCode: 200
            },
            input: {
              shape: 'S1d'
            },
            output: {
              shape: 'Se'
            }
          },
          EnableTrustAnchor: {
            http: {
              requestUri: '/trustanchor/{trustAnchorId}/enable',
              responseCode: 200
            },
            input: {
              shape: 'S1e'
            },
            output: {
              shape: 'S10'
            }
          },
          GetCrl: {
            http: {
              method: 'GET',
              requestUri: '/crl/{crlId}',
              responseCode: 200
            },
            input: {
              shape: 'S19'
            },
            output: {
              shape: 'S1a'
            }
          },
          GetProfile: {
            http: {
              method: 'GET',
              requestUri: '/profile/{profileId}',
              responseCode: 200
            },
            input: {
              shape: 'S1d'
            },
            output: {
              shape: 'Se'
            }
          },
          GetSubject: {
            http: {
              method: 'GET',
              requestUri: '/subject/{subjectId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['subjectId'],
              members: {
                subjectId: {
                  location: 'uri',
                  locationName: 'subjectId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subject: {
                  type: 'structure',
                  members: {
                    createdAt: {
                      shape: 'Sm'
                    },
                    credentials: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          enabled: {
                            type: 'boolean'
                          },
                          failed: {
                            type: 'boolean'
                          },
                          issuer: {},
                          seenAt: {
                            shape: 'Sm'
                          },
                          serialNumber: {},
                          x509CertificateData: {}
                        }
                      }
                    },
                    enabled: {
                      type: 'boolean'
                    },
                    instanceProperties: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          failed: {
                            type: 'boolean'
                          },
                          properties: {
                            type: 'map',
                            key: {},
                            value: {}
                          },
                          seenAt: {
                            shape: 'Sm'
                          }
                        }
                      }
                    },
                    lastSeenAt: {
                      shape: 'Sm'
                    },
                    subjectArn: {},
                    subjectId: {},
                    updatedAt: {
                      shape: 'Sm'
                    },
                    x509Subject: {}
                  }
                }
              }
            }
          },
          GetTrustAnchor: {
            http: {
              method: 'GET',
              requestUri: '/trustanchor/{trustAnchorId}',
              responseCode: 200
            },
            input: {
              shape: 'S1e'
            },
            output: {
              shape: 'S10'
            }
          },
          ImportCrl: {
            http: {
              requestUri: '/crls',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['crlData', 'name', 'trustAnchorArn'],
              members: {
                crlData: {
                  type: 'blob'
                },
                enabled: {
                  type: 'boolean'
                },
                name: {},
                tags: {
                  shape: 'Sa'
                },
                trustAnchorArn: {}
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          ListCrls: {
            http: {
              method: 'GET',
              requestUri: '/crls',
              responseCode: 200
            },
            input: {
              shape: 'S1s'
            },
            output: {
              type: 'structure',
              members: {
                crls: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProfiles: {
            http: {
              method: 'GET',
              requestUri: '/profiles',
              responseCode: 200
            },
            input: {
              shape: 'S1s'
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                profiles: {
                  type: 'list',
                  member: {
                    shape: 'Sf'
                  }
                }
              }
            }
          },
          ListSubjects: {
            http: {
              method: 'GET',
              requestUri: '/subjects',
              responseCode: 200
            },
            input: {
              shape: 'S1s'
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                subjects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        shape: 'Sm'
                      },
                      enabled: {
                        type: 'boolean'
                      },
                      lastSeenAt: {
                        shape: 'Sm'
                      },
                      subjectArn: {},
                      subjectId: {},
                      updatedAt: {
                        shape: 'Sm'
                      },
                      x509Subject: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/ListTagsForResource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sa'
                }
              }
            }
          },
          ListTrustAnchors: {
            http: {
              method: 'GET',
              requestUri: '/trustanchors',
              responseCode: 200
            },
            input: {
              shape: 'S1s'
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                trustAnchors: {
                  type: 'list',
                  member: {
                    shape: 'S11'
                  }
                }
              }
            }
          },
          PutAttributeMapping: {
            http: {
              method: 'PUT',
              requestUri: '/profiles/{profileId}/mappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['certificateField', 'mappingRules', 'profileId'],
              members: {
                certificateField: {},
                mappingRules: {
                  shape: 'Sj'
                },
                profileId: {
                  location: 'uri',
                  locationName: 'profileId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profile'],
              members: {
                profile: {
                  shape: 'Sf'
                }
              }
            },
            idempotent: true
          },
          PutNotificationSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/put-notifications-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['notificationSettings', 'trustAnchorId'],
              members: {
                notificationSettings: {
                  shape: 'Sr'
                },
                trustAnchorId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['trustAnchor'],
              members: {
                trustAnchor: {
                  shape: 'S11'
                }
              }
            }
          },
          ResetNotificationSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/reset-notifications-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['notificationSettingKeys', 'trustAnchorId'],
              members: {
                notificationSettingKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['event'],
                    members: {
                      channel: {},
                      event: {}
                    }
                  }
                },
                trustAnchorId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['trustAnchor'],
              members: {
                trustAnchor: {
                  shape: 'S11'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/TagResource',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sa'
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
              requestUri: '/UntagResource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sc'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCrl: {
            http: {
              method: 'PATCH',
              requestUri: '/crl/{crlId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['crlId'],
              members: {
                crlData: {
                  type: 'blob'
                },
                crlId: {
                  location: 'uri',
                  locationName: 'crlId'
                },
                name: {}
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          UpdateProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/profile/{profileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profileId'],
              members: {
                durationSeconds: {
                  type: 'integer'
                },
                managedPolicyArns: {
                  shape: 'S4'
                },
                name: {},
                profileId: {
                  location: 'uri',
                  locationName: 'profileId'
                },
                roleArns: {
                  shape: 'S7'
                },
                sessionPolicy: {}
              }
            },
            output: {
              shape: 'Se'
            },
            idempotent: true
          },
          UpdateTrustAnchor: {
            http: {
              method: 'PATCH',
              requestUri: '/trustanchor/{trustAnchorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trustAnchorId'],
              members: {
                name: {},
                source: {
                  shape: 'Sw'
                },
                trustAnchorId: {
                  location: 'uri',
                  locationName: 'trustAnchorId'
                }
              }
            },
            output: {
              shape: 'S10'
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {
                  shape: 'Sc'
                },
                value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          Sc: {
            type: 'string',
            sensitive: true
          },
          Se: {
            type: 'structure',
            members: {
              profile: {
                shape: 'Sf'
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              attributeMappings: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    certificateField: {},
                    mappingRules: {
                      shape: 'Sj'
                    }
                  }
                }
              },
              createdAt: {
                shape: 'Sm'
              },
              createdBy: {},
              durationSeconds: {
                type: 'integer'
              },
              enabled: {
                type: 'boolean'
              },
              managedPolicyArns: {
                shape: 'S4'
              },
              name: {},
              profileArn: {},
              profileId: {},
              requireInstanceProperties: {
                type: 'boolean'
              },
              roleArns: {
                shape: 'S7'
              },
              sessionPolicy: {},
              updatedAt: {
                shape: 'Sm'
              }
            }
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['specifier'],
              members: {
                specifier: {}
              }
            }
          },
          Sm: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['enabled', 'event'],
              members: {
                channel: {},
                enabled: {
                  type: 'boolean'
                },
                event: {},
                threshold: {
                  type: 'integer'
                }
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              sourceData: {
                type: 'structure',
                members: {
                  acmPcaArn: {},
                  x509CertificateData: {}
                },
                union: true
              },
              sourceType: {}
            }
          },
          S10: {
            type: 'structure',
            required: ['trustAnchor'],
            members: {
              trustAnchor: {
                shape: 'S11'
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              createdAt: {
                shape: 'Sm'
              },
              enabled: {
                type: 'boolean'
              },
              name: {},
              notificationSettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['enabled', 'event'],
                  members: {
                    channel: {},
                    configuredBy: {},
                    enabled: {
                      type: 'boolean'
                    },
                    event: {},
                    threshold: {
                      type: 'integer'
                    }
                  }
                }
              },
              source: {
                shape: 'Sw'
              },
              trustAnchorArn: {},
              trustAnchorId: {},
              updatedAt: {
                shape: 'Sm'
              }
            }
          },
          S19: {
            type: 'structure',
            required: ['crlId'],
            members: {
              crlId: {
                location: 'uri',
                locationName: 'crlId'
              }
            }
          },
          S1a: {
            type: 'structure',
            required: ['crl'],
            members: {
              crl: {
                shape: 'S1b'
              }
            }
          },
          S1b: {
            type: 'structure',
            members: {
              createdAt: {
                shape: 'Sm'
              },
              crlArn: {},
              crlData: {
                type: 'blob'
              },
              crlId: {},
              enabled: {
                type: 'boolean'
              },
              name: {},
              trustAnchorArn: {},
              updatedAt: {
                shape: 'Sm'
              }
            }
          },
          S1d: {
            type: 'structure',
            required: ['profileId'],
            members: {
              profileId: {
                location: 'uri',
                locationName: 'profileId'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['trustAnchorId'],
            members: {
              trustAnchorId: {
                location: 'uri',
                locationName: 'trustAnchorId'
              }
            }
          },
          S1s: {
            type: 'structure',
            members: {
              nextToken: {
                location: 'querystring',
                locationName: 'nextToken'
              },
              pageSize: {
                location: 'querystring',
                locationName: 'pageSize',
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aa4392c3e57475816428347a8f61c475d8ee53e5.js.map