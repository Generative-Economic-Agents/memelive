System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-09-21',
          endpointPrefix: 'api.ecr',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Amazon ECR',
          serviceFullName: 'Amazon EC2 Container Registry',
          serviceId: 'ECR',
          signatureVersion: 'v4',
          signingName: 'ecr',
          targetPrefix: 'AmazonEC2ContainerRegistry_V20150921',
          uid: 'ecr-2015-09-21'
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
                  shape: 'Sn'
                }
              }
            }
          },
          BatchGetImage: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageIds'],
              members: {
                registryId: {},
                repositoryName: {},
                imageIds: {
                  shape: 'Si'
                },
                acceptedMediaTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                images: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                failures: {
                  shape: 'Sn'
                }
              }
            }
          },
          BatchGetRepositoryScanningConfiguration: {
            input: {
              type: 'structure',
              required: ['repositoryNames'],
              members: {
                repositoryNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                scanningConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryArn: {},
                      repositoryName: {},
                      scanOnPush: {
                        type: 'boolean'
                      },
                      scanFrequency: {},
                      appliedScanFilters: {
                        shape: 'S15'
                      }
                    }
                  }
                },
                failures: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      repositoryName: {},
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
          CreatePullThroughCacheRule: {
            input: {
              type: 'structure',
              required: ['ecrRepositoryPrefix', 'upstreamRegistryUrl'],
              members: {
                ecrRepositoryPrefix: {},
                upstreamRegistryUrl: {},
                registryId: {},
                upstreamRegistry: {},
                credentialArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ecrRepositoryPrefix: {},
                upstreamRegistryUrl: {},
                createdAt: {
                  type: 'timestamp'
                },
                registryId: {},
                upstreamRegistry: {},
                credentialArn: {}
              }
            }
          },
          CreateRepository: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                tags: {
                  shape: 'S1p'
                },
                imageTagMutability: {},
                imageScanningConfiguration: {
                  shape: 'S1u'
                },
                encryptionConfiguration: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S1z'
                }
              }
            }
          },
          DeleteLifecyclePolicy: {
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
                lifecyclePolicyText: {},
                lastEvaluatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeletePullThroughCacheRule: {
            input: {
              type: 'structure',
              required: ['ecrRepositoryPrefix'],
              members: {
                ecrRepositoryPrefix: {},
                registryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ecrRepositoryPrefix: {},
                upstreamRegistryUrl: {},
                createdAt: {
                  type: 'timestamp'
                },
                registryId: {},
                credentialArn: {}
              }
            }
          },
          DeleteRegistryPolicy: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                policyText: {}
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
                  shape: 'S1z'
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
          DescribeImageReplicationStatus: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageId'],
              members: {
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
                },
                registryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
                },
                replicationStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      region: {},
                      registryId: {},
                      status: {},
                      failureCode: {}
                    }
                  }
                }
              }
            }
          },
          DescribeImageScanFindings: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageId'],
              members: {
                registryId: {},
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
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
                registryId: {},
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
                },
                imageScanStatus: {
                  shape: 'S2q'
                },
                imageScanFindings: {
                  type: 'structure',
                  members: {
                    imageScanCompletedAt: {
                      type: 'timestamp'
                    },
                    vulnerabilitySourceUpdatedAt: {
                      type: 'timestamp'
                    },
                    findingSeverityCounts: {
                      shape: 'S2w'
                    },
                    findings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          description: {},
                          uri: {},
                          severity: {},
                          attributes: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['key'],
                              members: {
                                key: {},
                                value: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    enhancedFindings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          awsAccountId: {},
                          description: {},
                          findingArn: {},
                          firstObservedAt: {
                            type: 'timestamp'
                          },
                          lastObservedAt: {
                            type: 'timestamp'
                          },
                          packageVulnerabilityDetails: {
                            type: 'structure',
                            members: {
                              cvss: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    baseScore: {
                                      type: 'double'
                                    },
                                    scoringVector: {},
                                    source: {},
                                    version: {}
                                  }
                                }
                              },
                              referenceUrls: {
                                type: 'list',
                                member: {}
                              },
                              relatedVulnerabilities: {
                                type: 'list',
                                member: {}
                              },
                              source: {},
                              sourceUrl: {},
                              vendorCreatedAt: {
                                type: 'timestamp'
                              },
                              vendorSeverity: {},
                              vendorUpdatedAt: {
                                type: 'timestamp'
                              },
                              vulnerabilityId: {},
                              vulnerablePackages: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    arch: {},
                                    epoch: {
                                      type: 'integer'
                                    },
                                    filePath: {},
                                    name: {},
                                    packageManager: {},
                                    release: {},
                                    sourceLayerHash: {},
                                    version: {}
                                  }
                                }
                              }
                            }
                          },
                          remediation: {
                            type: 'structure',
                            members: {
                              recommendation: {
                                type: 'structure',
                                members: {
                                  url: {},
                                  text: {}
                                }
                              }
                            }
                          },
                          resources: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                details: {
                                  type: 'structure',
                                  members: {
                                    awsEcrContainerImage: {
                                      type: 'structure',
                                      members: {
                                        architecture: {},
                                        author: {},
                                        imageHash: {},
                                        imageTags: {
                                          type: 'list',
                                          member: {}
                                        },
                                        platform: {},
                                        pushedAt: {
                                          type: 'timestamp'
                                        },
                                        registry: {},
                                        repositoryName: {}
                                      }
                                    }
                                  }
                                },
                                id: {},
                                tags: {
                                  type: 'map',
                                  key: {},
                                  value: {}
                                },
                                type: {}
                              }
                            }
                          },
                          score: {
                            type: 'double'
                          },
                          scoreDetails: {
                            type: 'structure',
                            members: {
                              cvss: {
                                type: 'structure',
                                members: {
                                  adjustments: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        metric: {},
                                        reason: {}
                                      }
                                    }
                                  },
                                  score: {
                                    type: 'double'
                                  },
                                  scoreSource: {},
                                  scoringVector: {},
                                  version: {}
                                }
                              }
                            }
                          },
                          severity: {},
                          status: {},
                          title: {},
                          type: {},
                          updatedAt: {
                            type: 'timestamp'
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
                },
                filter: {
                  type: 'structure',
                  members: {
                    tagStatus: {}
                  }
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
                        shape: 'S4o'
                      },
                      imageSizeInBytes: {
                        type: 'long'
                      },
                      imagePushedAt: {
                        type: 'timestamp'
                      },
                      imageScanStatus: {
                        shape: 'S2q'
                      },
                      imageScanFindingsSummary: {
                        type: 'structure',
                        members: {
                          imageScanCompletedAt: {
                            type: 'timestamp'
                          },
                          vulnerabilitySourceUpdatedAt: {
                            type: 'timestamp'
                          },
                          findingSeverityCounts: {
                            shape: 'S2w'
                          }
                        }
                      },
                      imageManifestMediaType: {},
                      artifactMediaType: {},
                      lastRecordedPullTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribePullThroughCacheRules: {
            input: {
              type: 'structure',
              members: {
                registryId: {},
                ecrRepositoryPrefixes: {
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
                pullThroughCacheRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ecrRepositoryPrefix: {},
                      upstreamRegistryUrl: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      registryId: {},
                      credentialArn: {},
                      upstreamRegistry: {},
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeRegistry: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                replicationConfiguration: {
                  shape: 'S51'
                }
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
                    shape: 'S1z'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetAuthorizationToken: {
            input: {
              type: 'structure',
              members: {
                registryIds: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated. The returned authorization token can be used to access any Amazon ECR registry that the IAM principal has access to, specifying a registry ID doesn\'t change the permissions scope of the authorization token.',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                authorizationData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      authorizationToken: {},
                      expiresAt: {
                        type: 'timestamp'
                      },
                      proxyEndpoint: {}
                    }
                  }
                }
              }
            }
          },
          GetDownloadUrlForLayer: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'layerDigest'],
              members: {
                registryId: {},
                repositoryName: {},
                layerDigest: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                downloadUrl: {},
                layerDigest: {}
              }
            }
          },
          GetLifecyclePolicy: {
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
                lifecyclePolicyText: {},
                lastEvaluatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetLifecyclePolicyPreview: {
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
                },
                filter: {
                  type: 'structure',
                  members: {
                    tagStatus: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                lifecyclePolicyText: {},
                status: {},
                nextToken: {},
                previewResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      imageTags: {
                        shape: 'S4o'
                      },
                      imageDigest: {},
                      imagePushedAt: {
                        type: 'timestamp'
                      },
                      action: {
                        type: 'structure',
                        members: {
                          type: {}
                        }
                      },
                      appliedRulePriority: {
                        type: 'integer'
                      }
                    }
                  }
                },
                summary: {
                  type: 'structure',
                  members: {
                    expiringImageTotalCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetRegistryPolicy: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                policyText: {}
              }
            }
          },
          GetRegistryScanningConfiguration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                scanningConfiguration: {
                  shape: 'S66'
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
          ListImages: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  type: 'structure',
                  members: {
                    tagStatus: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                imageIds: {
                  shape: 'Si'
                },
                nextToken: {}
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
                  shape: 'S1p'
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
                  shape: 'Sv'
                }
              }
            }
          },
          PutImageScanningConfiguration: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageScanningConfiguration'],
              members: {
                registryId: {},
                repositoryName: {},
                imageScanningConfiguration: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                imageScanningConfiguration: {
                  shape: 'S1u'
                }
              }
            }
          },
          PutImageTagMutability: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageTagMutability'],
              members: {
                registryId: {},
                repositoryName: {},
                imageTagMutability: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                imageTagMutability: {}
              }
            }
          },
          PutLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'lifecyclePolicyText'],
              members: {
                registryId: {},
                repositoryName: {},
                lifecyclePolicyText: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                lifecyclePolicyText: {}
              }
            }
          },
          PutRegistryPolicy: {
            input: {
              type: 'structure',
              required: ['policyText'],
              members: {
                policyText: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                policyText: {}
              }
            }
          },
          PutRegistryScanningConfiguration: {
            input: {
              type: 'structure',
              members: {
                scanType: {},
                rules: {
                  shape: 'S68'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryScanningConfiguration: {
                  shape: 'S66'
                }
              }
            }
          },
          PutReplicationConfiguration: {
            input: {
              type: 'structure',
              required: ['replicationConfiguration'],
              members: {
                replicationConfiguration: {
                  shape: 'S51'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                replicationConfiguration: {
                  shape: 'S51'
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
          StartImageScan: {
            input: {
              type: 'structure',
              required: ['repositoryName', 'imageId'],
              members: {
                registryId: {},
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                imageId: {
                  shape: 'Sj'
                },
                imageScanStatus: {
                  shape: 'S2q'
                }
              }
            }
          },
          StartLifecyclePolicyPreview: {
            input: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                registryId: {},
                repositoryName: {},
                lifecyclePolicyText: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                registryId: {},
                repositoryName: {},
                lifecyclePolicyText: {},
                status: {}
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
                  shape: 'S1p'
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
          UpdatePullThroughCacheRule: {
            input: {
              type: 'structure',
              required: ['ecrRepositoryPrefix', 'credentialArn'],
              members: {
                registryId: {},
                ecrRepositoryPrefix: {},
                credentialArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ecrRepositoryPrefix: {},
                registryId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                credentialArn: {}
              }
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
          },
          ValidatePullThroughCacheRule: {
            input: {
              type: 'structure',
              required: ['ecrRepositoryPrefix'],
              members: {
                ecrRepositoryPrefix: {},
                registryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ecrRepositoryPrefix: {},
                registryId: {},
                upstreamRegistryUrl: {},
                credentialArn: {},
                isValid: {
                  type: 'boolean'
                },
                failure: {}
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
          Sn: {
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
          },
          Sv: {
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
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['filter', 'filterType'],
              members: {
                filter: {},
                filterType: {}
              }
            }
          },
          S1p: {
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
          S1u: {
            type: 'structure',
            members: {
              scanOnPush: {
                type: 'boolean'
              }
            }
          },
          S1v: {
            type: 'structure',
            required: ['encryptionType'],
            members: {
              encryptionType: {},
              kmsKey: {}
            }
          },
          S1z: {
            type: 'structure',
            members: {
              repositoryArn: {},
              registryId: {},
              repositoryName: {},
              repositoryUri: {},
              createdAt: {
                type: 'timestamp'
              },
              imageTagMutability: {},
              imageScanningConfiguration: {
                shape: 'S1u'
              },
              encryptionConfiguration: {
                shape: 'S1v'
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              status: {},
              description: {}
            }
          },
          S2w: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S4o: {
            type: 'list',
            member: {}
          },
          S51: {
            type: 'structure',
            required: ['rules'],
            members: {
              rules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['destinations'],
                  members: {
                    destinations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['region', 'registryId'],
                        members: {
                          region: {},
                          registryId: {}
                        }
                      }
                    },
                    repositoryFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['filter', 'filterType'],
                        members: {
                          filter: {},
                          filterType: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S66: {
            type: 'structure',
            members: {
              scanType: {},
              rules: {
                shape: 'S68'
              }
            }
          },
          S68: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['scanFrequency', 'repositoryFilters'],
              members: {
                scanFrequency: {},
                repositoryFilters: {
                  shape: 'S15'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6a8eb5b2c9a3967617e1e5f63c887c0e8313d876.js.map