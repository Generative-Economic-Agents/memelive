System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-06-23',
          auth: ['aws.auth#sigv4'],
          endpointPrefix: 'b2bi',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'AWS B2BI',
          serviceFullName: 'AWS B2B Data Interchange',
          serviceId: 'b2bi',
          signatureVersion: 'v4',
          signingName: 'b2bi',
          targetPrefix: 'B2BI',
          uid: 'b2bi-2022-06-23'
        },
        operations: {
          CreateCapability: {
            input: {
              type: 'structure',
              required: ['name', 'type', 'configuration'],
              members: {
                name: {},
                type: {},
                configuration: {
                  shape: 'S4'
                },
                instructionsDocuments: {
                  shape: 'Se'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['capabilityId', 'capabilityArn', 'name', 'type', 'configuration', 'createdAt'],
              members: {
                capabilityId: {},
                capabilityArn: {},
                name: {},
                type: {},
                configuration: {
                  shape: 'S4'
                },
                instructionsDocuments: {
                  shape: 'Se'
                },
                createdAt: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreatePartnership: {
            input: {
              type: 'structure',
              required: ['profileId', 'name', 'email', 'capabilities'],
              members: {
                profileId: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                capabilities: {
                  shape: 'St'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'partnershipId', 'partnershipArn', 'createdAt'],
              members: {
                profileId: {},
                partnershipId: {},
                partnershipArn: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                capabilities: {
                  shape: 'St'
                },
                tradingPartnerId: {},
                createdAt: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreateProfile: {
            input: {
              type: 'structure',
              required: ['name', 'phone', 'businessName', 'logging'],
              members: {
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                businessName: {},
                logging: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'profileArn', 'name', 'businessName', 'phone', 'createdAt'],
              members: {
                profileId: {},
                profileArn: {},
                name: {},
                businessName: {},
                phone: {
                  shape: 'Ss'
                },
                email: {
                  shape: 'Sr'
                },
                logging: {},
                logGroupName: {},
                createdAt: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreateTransformer: {
            input: {
              type: 'structure',
              required: ['name', 'fileFormat', 'mappingTemplate', 'ediType'],
              members: {
                name: {},
                fileFormat: {},
                mappingTemplate: {},
                ediType: {
                  shape: 'S6'
                },
                sampleDocument: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['transformerId', 'transformerArn', 'name', 'fileFormat', 'mappingTemplate', 'status', 'ediType', 'createdAt'],
              members: {
                transformerId: {},
                transformerArn: {},
                name: {},
                fileFormat: {},
                mappingTemplate: {},
                status: {},
                ediType: {
                  shape: 'S6'
                },
                sampleDocument: {},
                createdAt: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          DeleteCapability: {
            input: {
              type: 'structure',
              required: ['capabilityId'],
              members: {
                capabilityId: {}
              }
            },
            idempotent: true
          },
          DeletePartnership: {
            input: {
              type: 'structure',
              required: ['partnershipId'],
              members: {
                partnershipId: {}
              }
            },
            idempotent: true
          },
          DeleteProfile: {
            input: {
              type: 'structure',
              required: ['profileId'],
              members: {
                profileId: {}
              }
            },
            idempotent: true
          },
          DeleteTransformer: {
            input: {
              type: 'structure',
              required: ['transformerId'],
              members: {
                transformerId: {}
              }
            },
            idempotent: true
          },
          GetCapability: {
            input: {
              type: 'structure',
              required: ['capabilityId'],
              members: {
                capabilityId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['capabilityId', 'capabilityArn', 'name', 'type', 'configuration', 'createdAt'],
              members: {
                capabilityId: {},
                capabilityArn: {},
                name: {},
                type: {},
                configuration: {
                  shape: 'S4'
                },
                instructionsDocuments: {
                  shape: 'Se'
                },
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            }
          },
          GetPartnership: {
            input: {
              type: 'structure',
              required: ['partnershipId'],
              members: {
                partnershipId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'partnershipId', 'partnershipArn', 'createdAt'],
              members: {
                profileId: {},
                partnershipId: {},
                partnershipArn: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                capabilities: {
                  shape: 'St'
                },
                tradingPartnerId: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            }
          },
          GetProfile: {
            input: {
              type: 'structure',
              required: ['profileId'],
              members: {
                profileId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'profileArn', 'name', 'phone', 'businessName', 'createdAt'],
              members: {
                profileId: {},
                profileArn: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                businessName: {},
                logging: {},
                logGroupName: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            }
          },
          GetTransformer: {
            input: {
              type: 'structure',
              required: ['transformerId'],
              members: {
                transformerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['transformerId', 'transformerArn', 'name', 'fileFormat', 'mappingTemplate', 'status', 'ediType', 'createdAt'],
              members: {
                transformerId: {},
                transformerArn: {},
                name: {},
                fileFormat: {},
                mappingTemplate: {},
                status: {},
                ediType: {
                  shape: 'S6'
                },
                sampleDocument: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            }
          },
          GetTransformerJob: {
            input: {
              type: 'structure',
              required: ['transformerJobId', 'transformerId'],
              members: {
                transformerJobId: {},
                transformerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                outputFiles: {
                  type: 'list',
                  member: {
                    shape: 'Sa'
                  }
                },
                message: {}
              }
            }
          },
          ListCapabilities: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['capabilities'],
              members: {
                capabilities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['capabilityId', 'name', 'type', 'createdAt'],
                    members: {
                      capabilityId: {},
                      name: {},
                      type: {},
                      createdAt: {
                        shape: 'Sn'
                      },
                      modifiedAt: {
                        shape: 'S1g'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPartnerships: {
            input: {
              type: 'structure',
              members: {
                profileId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['partnerships'],
              members: {
                partnerships: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['profileId', 'partnershipId', 'createdAt'],
                    members: {
                      profileId: {},
                      partnershipId: {},
                      name: {},
                      capabilities: {
                        shape: 'St'
                      },
                      tradingPartnerId: {},
                      createdAt: {
                        shape: 'Sn'
                      },
                      modifiedAt: {
                        shape: 'S1g'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProfiles: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profiles'],
              members: {
                profiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['profileId', 'name', 'businessName', 'createdAt'],
                    members: {
                      profileId: {},
                      name: {},
                      businessName: {},
                      logging: {},
                      logGroupName: {},
                      createdAt: {
                        shape: 'Sn'
                      },
                      modifiedAt: {
                        shape: 'S1g'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          ListTransformers: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['transformers'],
              members: {
                transformers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['transformerId', 'name', 'fileFormat', 'mappingTemplate', 'status', 'ediType', 'createdAt'],
                    members: {
                      transformerId: {},
                      name: {},
                      fileFormat: {},
                      mappingTemplate: {},
                      status: {},
                      ediType: {
                        shape: 'S6'
                      },
                      sampleDocument: {},
                      createdAt: {
                        shape: 'Sn'
                      },
                      modifiedAt: {
                        shape: 'S1g'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          StartTransformerJob: {
            input: {
              type: 'structure',
              required: ['inputFile', 'outputLocation', 'transformerId'],
              members: {
                inputFile: {
                  shape: 'Sa'
                },
                outputLocation: {
                  shape: 'Sa'
                },
                transformerId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['transformerJobId'],
              members: {
                transformerJobId: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          TestMapping: {
            input: {
              type: 'structure',
              required: ['inputFileContent', 'mappingTemplate', 'fileFormat'],
              members: {
                inputFileContent: {},
                mappingTemplate: {},
                fileFormat: {}
              }
            },
            output: {
              type: 'structure',
              required: ['mappedFileContent'],
              members: {
                mappedFileContent: {}
              }
            },
            idempotent: true
          },
          TestParsing: {
            input: {
              type: 'structure',
              required: ['inputFile', 'fileFormat', 'ediType'],
              members: {
                inputFile: {
                  shape: 'Sa'
                },
                fileFormat: {},
                ediType: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['parsedFileContent'],
              members: {
                parsedFileContent: {}
              }
            },
            idempotent: true
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            idempotent: true
          },
          UpdateCapability: {
            input: {
              type: 'structure',
              required: ['capabilityId'],
              members: {
                capabilityId: {},
                name: {},
                configuration: {
                  shape: 'S4'
                },
                instructionsDocuments: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['capabilityId', 'capabilityArn', 'name', 'type', 'configuration', 'createdAt'],
              members: {
                capabilityId: {},
                capabilityArn: {},
                name: {},
                type: {},
                configuration: {
                  shape: 'S4'
                },
                instructionsDocuments: {
                  shape: 'Se'
                },
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            },
            idempotent: true
          },
          UpdatePartnership: {
            input: {
              type: 'structure',
              required: ['partnershipId'],
              members: {
                partnershipId: {},
                name: {},
                capabilities: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'partnershipId', 'partnershipArn', 'createdAt'],
              members: {
                profileId: {},
                partnershipId: {},
                partnershipArn: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                capabilities: {
                  shape: 'St'
                },
                tradingPartnerId: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            },
            idempotent: true
          },
          UpdateProfile: {
            input: {
              type: 'structure',
              required: ['profileId'],
              members: {
                profileId: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                businessName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['profileId', 'profileArn', 'name', 'phone', 'businessName', 'createdAt'],
              members: {
                profileId: {},
                profileArn: {},
                name: {},
                email: {
                  shape: 'Sr'
                },
                phone: {
                  shape: 'Ss'
                },
                businessName: {},
                logging: {},
                logGroupName: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            },
            idempotent: true
          },
          UpdateTransformer: {
            input: {
              type: 'structure',
              required: ['transformerId'],
              members: {
                transformerId: {},
                name: {},
                fileFormat: {},
                mappingTemplate: {},
                status: {},
                ediType: {
                  shape: 'S6'
                },
                sampleDocument: {}
              }
            },
            output: {
              type: 'structure',
              required: ['transformerId', 'transformerArn', 'name', 'fileFormat', 'mappingTemplate', 'status', 'ediType', 'createdAt', 'modifiedAt'],
              members: {
                transformerId: {},
                transformerArn: {},
                name: {},
                fileFormat: {},
                mappingTemplate: {},
                status: {},
                ediType: {
                  shape: 'S6'
                },
                sampleDocument: {},
                createdAt: {
                  shape: 'Sn'
                },
                modifiedAt: {
                  shape: 'S1g'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              edi: {
                type: 'structure',
                required: ['type', 'inputLocation', 'outputLocation', 'transformerId'],
                members: {
                  type: {
                    shape: 'S6'
                  },
                  inputLocation: {
                    shape: 'Sa'
                  },
                  outputLocation: {
                    shape: 'Sa'
                  },
                  transformerId: {}
                }
              }
            },
            union: true
          },
          S6: {
            type: 'structure',
            members: {
              x12Details: {
                type: 'structure',
                members: {
                  transactionSet: {},
                  version: {}
                }
              }
            },
            union: true
          },
          Sa: {
            type: 'structure',
            members: {
              bucketName: {},
              key: {}
            }
          },
          Se: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          Sg: {
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
          Sn: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sr: {
            type: 'string',
            sensitive: true
          },
          Ss: {
            type: 'string',
            sensitive: true
          },
          St: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d16d8c8d373698af7c5f0c34b6ef560b51afa6a2.js.map