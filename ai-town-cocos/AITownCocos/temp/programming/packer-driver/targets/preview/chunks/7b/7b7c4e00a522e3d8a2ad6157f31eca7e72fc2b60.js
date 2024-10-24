System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-08-25',
          endpointPrefix: 'signer',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'signer',
          serviceFullName: 'AWS Signer',
          serviceId: 'signer',
          signatureVersion: 'v4',
          signingName: 'signer',
          uid: 'signer-2017-08-25'
        },
        operations: {
          AddProfilePermission: {
            http: {
              requestUri: '/signing-profiles/{profileName}/permissions'
            },
            input: {
              type: 'structure',
              required: ['action', 'principal', 'statementId', 'profileName'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                },
                profileVersion: {},
                action: {},
                principal: {},
                revisionId: {},
                statementId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                revisionId: {}
              }
            }
          },
          CancelSigningProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/signing-profiles/{profileName}'
            },
            input: {
              type: 'structure',
              required: ['profileName'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                }
              }
            }
          },
          DescribeSigningJob: {
            http: {
              method: 'GET',
              requestUri: '/signing-jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                source: {
                  shape: 'Sa'
                },
                signingMaterial: {
                  shape: 'Sf'
                },
                platformId: {},
                platformDisplayName: {},
                profileName: {},
                profileVersion: {},
                overrides: {
                  shape: 'Sj'
                },
                signingParameters: {
                  shape: 'So'
                },
                createdAt: {
                  type: 'timestamp'
                },
                completedAt: {
                  type: 'timestamp'
                },
                signatureExpiresAt: {
                  type: 'timestamp'
                },
                requestedBy: {},
                status: {},
                statusReason: {},
                revocationRecord: {
                  type: 'structure',
                  members: {
                    reason: {},
                    revokedAt: {
                      type: 'timestamp'
                    },
                    revokedBy: {}
                  }
                },
                signedObject: {
                  shape: 'Sw'
                },
                jobOwner: {},
                jobInvoker: {}
              }
            }
          },
          GetRevocationStatus: {
            http: {
              method: 'GET',
              requestUri: '/revocations'
            },
            input: {
              type: 'structure',
              required: ['signatureTimestamp', 'platformId', 'profileVersionArn', 'jobArn', 'certificateHashes'],
              members: {
                signatureTimestamp: {
                  location: 'querystring',
                  locationName: 'signatureTimestamp',
                  type: 'timestamp'
                },
                platformId: {
                  location: 'querystring',
                  locationName: 'platformId'
                },
                profileVersionArn: {
                  location: 'querystring',
                  locationName: 'profileVersionArn'
                },
                jobArn: {
                  location: 'querystring',
                  locationName: 'jobArn'
                },
                certificateHashes: {
                  location: 'querystring',
                  locationName: 'certificateHashes',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                revokedEntities: {
                  type: 'list',
                  member: {}
                }
              }
            },
            endpoint: {
              hostPrefix: 'verification.'
            }
          },
          GetSigningPlatform: {
            http: {
              method: 'GET',
              requestUri: '/signing-platforms/{platformId}'
            },
            input: {
              type: 'structure',
              required: ['platformId'],
              members: {
                platformId: {
                  location: 'uri',
                  locationName: 'platformId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                platformId: {},
                displayName: {},
                partner: {},
                target: {},
                category: {},
                signingConfiguration: {
                  shape: 'S17'
                },
                signingImageFormat: {
                  shape: 'S1c'
                },
                maxSizeInMB: {
                  type: 'integer'
                },
                revocationSupported: {
                  type: 'boolean'
                }
              }
            }
          },
          GetSigningProfile: {
            http: {
              method: 'GET',
              requestUri: '/signing-profiles/{profileName}'
            },
            input: {
              type: 'structure',
              required: ['profileName'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                },
                profileOwner: {
                  location: 'querystring',
                  locationName: 'profileOwner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                profileName: {},
                profileVersion: {},
                profileVersionArn: {},
                revocationRecord: {
                  type: 'structure',
                  members: {
                    revocationEffectiveFrom: {
                      type: 'timestamp'
                    },
                    revokedAt: {
                      type: 'timestamp'
                    },
                    revokedBy: {}
                  }
                },
                signingMaterial: {
                  shape: 'Sf'
                },
                platformId: {},
                platformDisplayName: {},
                signatureValidityPeriod: {
                  shape: 'S1j'
                },
                overrides: {
                  shape: 'Sj'
                },
                signingParameters: {
                  shape: 'So'
                },
                status: {},
                statusReason: {},
                arn: {},
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          ListProfilePermissions: {
            http: {
              method: 'GET',
              requestUri: '/signing-profiles/{profileName}/permissions'
            },
            input: {
              type: 'structure',
              required: ['profileName'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
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
                revisionId: {},
                policySizeBytes: {
                  type: 'integer'
                },
                permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      action: {},
                      principal: {},
                      statementId: {},
                      profileVersion: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSigningJobs: {
            http: {
              method: 'GET',
              requestUri: '/signing-jobs'
            },
            input: {
              type: 'structure',
              members: {
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                platformId: {
                  location: 'querystring',
                  locationName: 'platformId'
                },
                requestedBy: {
                  location: 'querystring',
                  locationName: 'requestedBy'
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
                isRevoked: {
                  location: 'querystring',
                  locationName: 'isRevoked',
                  type: 'boolean'
                },
                signatureExpiresBefore: {
                  location: 'querystring',
                  locationName: 'signatureExpiresBefore',
                  type: 'timestamp'
                },
                signatureExpiresAfter: {
                  location: 'querystring',
                  locationName: 'signatureExpiresAfter',
                  type: 'timestamp'
                },
                jobInvoker: {
                  location: 'querystring',
                  locationName: 'jobInvoker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      jobId: {},
                      source: {
                        shape: 'Sa'
                      },
                      signedObject: {
                        shape: 'Sw'
                      },
                      signingMaterial: {
                        shape: 'Sf'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      status: {},
                      isRevoked: {
                        type: 'boolean'
                      },
                      profileName: {},
                      profileVersion: {},
                      platformId: {},
                      platformDisplayName: {},
                      signatureExpiresAt: {
                        type: 'timestamp'
                      },
                      jobOwner: {},
                      jobInvoker: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSigningPlatforms: {
            http: {
              method: 'GET',
              requestUri: '/signing-platforms'
            },
            input: {
              type: 'structure',
              members: {
                category: {
                  location: 'querystring',
                  locationName: 'category'
                },
                partner: {
                  location: 'querystring',
                  locationName: 'partner'
                },
                target: {
                  location: 'querystring',
                  locationName: 'target'
                },
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
                platforms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      platformId: {},
                      displayName: {},
                      partner: {},
                      target: {},
                      category: {},
                      signingConfiguration: {
                        shape: 'S17'
                      },
                      signingImageFormat: {
                        shape: 'S1c'
                      },
                      maxSizeInMB: {
                        type: 'integer'
                      },
                      revocationSupported: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSigningProfiles: {
            http: {
              method: 'GET',
              requestUri: '/signing-profiles'
            },
            input: {
              type: 'structure',
              members: {
                includeCanceled: {
                  location: 'querystring',
                  locationName: 'includeCanceled',
                  type: 'boolean'
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
                platformId: {
                  location: 'querystring',
                  locationName: 'platformId'
                },
                statuses: {
                  location: 'querystring',
                  locationName: 'statuses',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                profiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      profileName: {},
                      profileVersion: {},
                      profileVersionArn: {},
                      signingMaterial: {
                        shape: 'Sf'
                      },
                      signatureValidityPeriod: {
                        shape: 'S1j'
                      },
                      platformId: {},
                      platformDisplayName: {},
                      signingParameters: {
                        shape: 'So'
                      },
                      status: {},
                      arn: {},
                      tags: {
                        shape: 'S1o'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S1o'
                }
              }
            }
          },
          PutSigningProfile: {
            http: {
              method: 'PUT',
              requestUri: '/signing-profiles/{profileName}'
            },
            input: {
              type: 'structure',
              required: ['profileName', 'platformId'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                },
                signingMaterial: {
                  shape: 'Sf'
                },
                signatureValidityPeriod: {
                  shape: 'S1j'
                },
                platformId: {},
                overrides: {
                  shape: 'Sj'
                },
                signingParameters: {
                  shape: 'So'
                },
                tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                profileVersion: {},
                profileVersionArn: {}
              }
            }
          },
          RemoveProfilePermission: {
            http: {
              method: 'DELETE',
              requestUri: '/signing-profiles/{profileName}/permissions/{statementId}'
            },
            input: {
              type: 'structure',
              required: ['revisionId', 'profileName', 'statementId'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                },
                revisionId: {
                  location: 'querystring',
                  locationName: 'revisionId'
                },
                statementId: {
                  location: 'uri',
                  locationName: 'statementId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                revisionId: {}
              }
            }
          },
          RevokeSignature: {
            http: {
              method: 'PUT',
              requestUri: '/signing-jobs/{jobId}/revoke'
            },
            input: {
              type: 'structure',
              required: ['reason', 'jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                jobOwner: {},
                reason: {}
              }
            }
          },
          RevokeSigningProfile: {
            http: {
              method: 'PUT',
              requestUri: '/signing-profiles/{profileName}/revoke'
            },
            input: {
              type: 'structure',
              required: ['profileVersion', 'reason', 'effectiveTime', 'profileName'],
              members: {
                profileName: {
                  location: 'uri',
                  locationName: 'profileName'
                },
                profileVersion: {},
                reason: {},
                effectiveTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          SignPayload: {
            http: {
              requestUri: '/signing-jobs/with-payload'
            },
            input: {
              type: 'structure',
              required: ['profileName', 'payload', 'payloadFormat'],
              members: {
                profileName: {},
                profileOwner: {},
                payload: {
                  type: 'blob'
                },
                payloadFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                jobOwner: {},
                metadata: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                signature: {
                  type: 'blob'
                }
              }
            }
          },
          StartSigningJob: {
            http: {
              requestUri: '/signing-jobs'
            },
            input: {
              type: 'structure',
              required: ['source', 'destination', 'profileName', 'clientRequestToken'],
              members: {
                source: {
                  shape: 'Sa'
                },
                destination: {
                  type: 'structure',
                  members: {
                    s3: {
                      type: 'structure',
                      members: {
                        bucketName: {},
                        prefix: {}
                      }
                    }
                  }
                },
                profileName: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                profileOwner: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                jobOwner: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'S1o'
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
              requestUri: '/tags/{resourceArn}'
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
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            members: {
              s3: {
                type: 'structure',
                required: ['bucketName', 'key', 'version'],
                members: {
                  bucketName: {},
                  key: {},
                  version: {}
                }
              }
            }
          },
          Sf: {
            type: 'structure',
            required: ['certificateArn'],
            members: {
              certificateArn: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              signingConfiguration: {
                type: 'structure',
                members: {
                  encryptionAlgorithm: {},
                  hashAlgorithm: {}
                }
              },
              signingImageFormat: {}
            }
          },
          So: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            members: {
              s3: {
                type: 'structure',
                members: {
                  bucketName: {},
                  key: {}
                }
              }
            }
          },
          S17: {
            type: 'structure',
            required: ['encryptionAlgorithmOptions', 'hashAlgorithmOptions'],
            members: {
              encryptionAlgorithmOptions: {
                type: 'structure',
                required: ['allowedValues', 'defaultValue'],
                members: {
                  allowedValues: {
                    type: 'list',
                    member: {}
                  },
                  defaultValue: {}
                }
              },
              hashAlgorithmOptions: {
                type: 'structure',
                required: ['allowedValues', 'defaultValue'],
                members: {
                  allowedValues: {
                    type: 'list',
                    member: {}
                  },
                  defaultValue: {}
                }
              }
            }
          },
          S1c: {
            type: 'structure',
            required: ['supportedFormats', 'defaultFormat'],
            members: {
              supportedFormats: {
                type: 'list',
                member: {}
              },
              defaultFormat: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              value: {
                type: 'integer'
              },
              type: {}
            }
          },
          S1o: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7b7c4e00a522e3d8a2ad6157f31eca7e72fc2b60.js.map