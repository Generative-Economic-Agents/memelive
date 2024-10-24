System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-10-30',
          endpointPrefix: 'api.ecr-public',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon ECR Public',
          serviceFullName: 'Amazon Elastic Container Registry Public',
          serviceId: 'ECR PUBLIC',
          signatureVersion: 'v4',
          signingName: 'ecr-public',
          targetPrefix: 'SpencerFrontendService',
          uid: 'ecr-public-2020-10-30'
        },
        operations: {
          BatchCheckLayerAvailability: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'layerDigests'],
              members: {
                registryId: {},
                repositoryName: {},
                layerDigests: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                layers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      layerDigest: {},
                      layerAvailability: {},
                      layerSize: {
                        type: 'long'
                      },
                      mediaType: {}
                    }
                  }
                },
                failures: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      layerDigest: {},
                      failureCode: {},
                      failureReason: {}
                    }
                  }
                }
              }
            }
          },
          BatchDeleteImage: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageIds'],
              members: {
                registryId: {},
                repositoryName: {},
                imageIds: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                imageIds: {
                  shape: 'Si'
                },
                failures: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      imageId: {
                        shape: 'Sj'
                      },
                      failureCode: {},
                      failureReason: {}
                    }
                  }
                }
              }
            }
          },
          CompleteLayerUpload: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'uploadId', 'layerDigests'],
              members: {
                registryId: {},
                repositoryName: {},
                uploadId: {},
                layerDigests: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                uploadId: {},
                layerDigest: {}
              }
            }
          },
          CreateRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {},
                catalogData: {
                  shape: 'Sx'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S1b'
                },
                catalogData: {
                  shape: 'S1f'
                }
              }
            }
          },
          DeleteRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S1b'
                }
              }
            }
          },
          DeleteRepositoryPolicy: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                policyText: {}
              }
            }
          },
          DescribeImageTags: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                imageTagDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      imageTag: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      imageDetail: {
                        type: 'structure',
                        members: {
                          imageDigest: {},
                          imageSizeInBytes: {
                            type: 'long'
                          },
                          imagePushedAt: {
                            type: 'timestamp'
                          },
                          imageManifestMediaType: {},
                          artifactMediaType: {}
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeImages: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                imageIds: {
                  shape: 'Si'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                imageDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      registryId: {},
                      repositoryName: {},
                      imageDigest: {},
                      imageTags: {
                        type: 'list',
                        member: {}
                      },
                      imageSizeInBytes: {
                        type: 'long'
                      },
                      imagePushedAt: {
                        type: 'timestamp'
                      },
                      imageManifestMediaType: {},
                      artifactMediaType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeRegistries: {
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
              required: ['registries'],
              members: {
                registries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['registryId', 'registryArn', 'registryUri', 'verified', 'aliases'],
                    members: {
                      registryId: {},
                      registryArn: {},
                      registryUri: {},
                      verified: {
                        type: 'boolean'
                      },
                      aliases: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['name', 'status', 'primaryRegistryAlias', 'defaultRegistryAlias'],
                          members: {
                            name: {},
                            status: {},
                            primaryRegistryAlias: {
                              type: 'boolean'
                            },
                            defaultRegistryAlias: {
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeRepositories: {
            input: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryNames: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositories: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetAuthorizationToken: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                authorizationData: {
                  type: 'structure',
                  members: {
                    authorizationToken: {},
                    expiresAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetRegistryCatalogData: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['registryCatalogData'],
              members: {
                registryCatalogData: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetRepositoryCatalogData: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                catalogData: {
                  shape: 'S1f'
                }
              }
            }
          },
          GetRepositoryPolicy: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                policyText: {}
              }
            }
          },
          InitiateLayerUpload: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                uploadId: {},
                partSize: {
                  type: 'long'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
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
          PutImage: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageManifest'],
              members: {
                registryId: {},
                repositoryName: {},
                imageManifest: {},
                imageManifestMediaType: {},
                imageTag: {},
                imageDigest: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                image: {
                  type: 'structure',
                  members: {
                    registryId: {},
                    repositoryName: {},
                    imageId: {
                      shape: 'Sj'
                    },
                    imageManifest: {},
                    imageManifestMediaType: {}
                  }
                }
              }
            }
          },
          PutRegistryCatalogData: {
            input: {
              type: 'structure',
              members: {
                displayName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['registryCatalogData'],
              members: {
                registryCatalogData: {
                  shape: 'S2o'
                }
              }
            }
          },
          PutRepositoryCatalogData: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'catalogData'],
              members: {
                registryId: {},
                repositoryName: {},
                catalogData: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                catalogData: {
                  shape: 'S1f'
                }
              }
            }
          },
          SetRepositoryPolicy: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'policyText'],
              members: {
                registryId: {},
                repositoryName: {},
                policyText: {},
                force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                policyText: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
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
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
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
          UploadLayerPart: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'uploadId', 'partFirstByte', 'partLastByte', 'layerPartBlob'],
              members: {
                registryId: {},
                repositoryName: {},
                uploadId: {},
                partFirstByte: {
                  type: 'long'
                },
                partLastByte: {
                  type: 'long'
                },
                layerPartBlob: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                uploadId: {},
                lastByteReceived: {
                  type: 'long'
                }
              }
            }
          }
        },
        shapes: {
          Si: {
            type: 'list',
            member: {
              shape: 'Sj'
            }
          },
          Sj: {
            type: 'structure',
            members: {
              imageDigest: {},
              imageTag: {}
            }
          },
          Sx: {
            type: 'structure',
            members: {
              description: {},
              architectures: {
                shape: 'Sz'
              },
              operatingSystems: {
                shape: 'S11'
              },
              logoImageBlob: {
                type: 'blob'
              },
              aboutText: {},
              usageText: {}
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S11: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S1b: {
            type: 'structure',
            members: {
              repositoryArn: {},
              registryId: {},
              repositoryName: {},
              repositoryUri: {},
              createdAt: {
                type: 'timestamp'
              }
            }
          },
          S1f: {
            type: 'structure',
            members: {
              description: {},
              architectures: {
                shape: 'Sz'
              },
              operatingSystems: {
                shape: 'S11'
              },
              logoUrl: {},
              aboutText: {},
              usageText: {},
              marketplaceCertified: {
                type: 'boolean'
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              displayName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c1345c5134e37c44fc54bb4ea2b5585e34b263fc.js.map