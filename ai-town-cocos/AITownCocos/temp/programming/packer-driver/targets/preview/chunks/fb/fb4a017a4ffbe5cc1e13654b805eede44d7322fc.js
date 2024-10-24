System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-22',
          endpointPrefix: 'codeartifact',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'CodeArtifact',
          serviceId: 'codeartifact',
          signatureVersion: 'v4',
          signingName: 'codeartifact',
          uid: 'codeartifact-2018-09-22'
        },
        operations: {
          AssociateExternalConnection: {
            http: {
              requestUri: '/v1/repository/external-connection'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'externalConnection'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                externalConnection: {
                  location: 'querystring',
                  locationName: 'external-connection'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          },
          CopyPackageVersions: {
            http: {
              requestUri: '/v1/package/versions/copy'
            },
            input: {
              type: 'structure',
              required: ['domain', 'sourceRepository', 'destinationRepository', 'format', 'package'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                sourceRepository: {
                  location: 'querystring',
                  locationName: 'source-repository'
                },
                destinationRepository: {
                  location: 'querystring',
                  locationName: 'destination-repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                versions: {
                  shape: 'Sk'
                },
                versionRevisions: {
                  shape: 'Sm'
                },
                allowOverwrite: {
                  type: 'boolean'
                },
                includeFromUpstream: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulVersions: {
                  shape: 'Sq'
                },
                failedVersions: {
                  shape: 'Su'
                }
              }
            }
          },
          CreateDomain: {
            http: {
              requestUri: '/v1/domain'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                encryptionKey: {},
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domain: {
                  shape: 'S14'
                }
              }
            }
          },
          CreatePackageGroup: {
            http: {
              requestUri: '/v1/package-group'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {},
                contactInfo: {},
                description: {},
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                }
              }
            }
          },
          CreateRepository: {
            http: {
              requestUri: '/v1/repository'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                description: {},
                upstreams: {
                  shape: 'S1l'
                },
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          },
          DeleteDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/domain'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domain: {
                  shape: 'S14'
                }
              }
            }
          },
          DeleteDomainPermissionsPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/domain/permissions/policy'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                policyRevision: {
                  location: 'querystring',
                  locationName: 'policy-revision'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          DeletePackage: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/package'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deletedPackage: {
                  shape: 'S1x'
                }
              }
            }
          },
          DeletePackageGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/package-group'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                }
              }
            },
            idempotent: true
          },
          DeletePackageVersions: {
            http: {
              requestUri: '/v1/package/versions/delete'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'versions'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                versions: {
                  shape: 'Sk'
                },
                expectedStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulVersions: {
                  shape: 'Sq'
                },
                failedVersions: {
                  shape: 'Su'
                }
              }
            }
          },
          DeleteRepository: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/repository'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          },
          DeleteRepositoryPermissionsPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/repository/permissions/policies'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                policyRevision: {
                  location: 'querystring',
                  locationName: 'policy-revision'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          DescribeDomain: {
            http: {
              method: 'GET',
              requestUri: '/v1/domain'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domain: {
                  shape: 'S14'
                }
              }
            }
          },
          DescribePackage: {
            http: {
              method: 'GET',
              requestUri: '/v1/package'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['package'],
              members: {
                'package': {
                  type: 'structure',
                  members: {
                    format: {},
                    namespace: {},
                    name: {},
                    originConfiguration: {
                      shape: 'S1y'
                    }
                  }
                }
              }
            }
          },
          DescribePackageGroup: {
            http: {
              method: 'GET',
              requestUri: '/v1/package-group'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                }
              }
            }
          },
          DescribePackageVersion: {
            http: {
              method: 'GET',
              requestUri: '/v1/package/version'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['packageVersion'],
              members: {
                packageVersion: {
                  type: 'structure',
                  members: {
                    format: {},
                    namespace: {},
                    packageName: {},
                    displayName: {},
                    version: {},
                    summary: {},
                    homePage: {},
                    sourceCodeRepository: {},
                    publishedTime: {
                      type: 'timestamp'
                    },
                    licenses: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          url: {}
                        }
                      }
                    },
                    revision: {},
                    status: {},
                    origin: {
                      shape: 'S2n'
                    }
                  }
                }
              }
            }
          },
          DescribeRepository: {
            http: {
              method: 'GET',
              requestUri: '/v1/repository'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          },
          DisassociateExternalConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/repository/external-connection'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'externalConnection'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                externalConnection: {
                  location: 'querystring',
                  locationName: 'external-connection'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          },
          DisposePackageVersions: {
            http: {
              requestUri: '/v1/package/versions/dispose'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'versions'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                versions: {
                  shape: 'Sk'
                },
                versionRevisions: {
                  shape: 'Sm'
                },
                expectedStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulVersions: {
                  shape: 'Sq'
                },
                failedVersions: {
                  shape: 'Su'
                }
              }
            }
          },
          GetAssociatedPackageGroup: {
            http: {
              method: 'GET',
              requestUri: '/v1/get-associated-package-group'
            },
            input: {
              type: 'structure',
              required: ['domain', 'format', 'package'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                },
                associationType: {}
              }
            }
          },
          GetAuthorizationToken: {
            http: {
              requestUri: '/v1/authorization-token'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                durationSeconds: {
                  location: 'querystring',
                  locationName: 'duration',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                authorizationToken: {},
                expiration: {
                  type: 'timestamp'
                }
              },
              sensitive: true
            }
          },
          GetDomainPermissionsPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v1/domain/permissions/policy'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          GetPackageVersionAsset: {
            http: {
              method: 'GET',
              requestUri: '/v1/package/version/asset'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion', 'asset'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                },
                asset: {
                  location: 'querystring',
                  locationName: 'asset'
                },
                packageVersionRevision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                asset: {
                  shape: 'S37'
                },
                assetName: {
                  location: 'header',
                  locationName: 'X-AssetName'
                },
                packageVersion: {
                  location: 'header',
                  locationName: 'X-PackageVersion'
                },
                packageVersionRevision: {
                  location: 'header',
                  locationName: 'X-PackageVersionRevision'
                }
              },
              payload: 'asset'
            }
          },
          GetPackageVersionReadme: {
            http: {
              method: 'GET',
              requestUri: '/v1/package/version/readme'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                format: {},
                namespace: {},
                'package': {},
                version: {},
                versionRevision: {},
                readme: {}
              }
            }
          },
          GetRepositoryEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/v1/repository/endpoint'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositoryEndpoint: {}
              }
            }
          },
          GetRepositoryPermissionsPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v1/repository/permissions/policy'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          ListAllowedRepositoriesForGroup: {
            http: {
              method: 'GET',
              requestUri: '/v1/package-group-allowed-repositories'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup', 'originRestrictionType'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                },
                originRestrictionType: {
                  location: 'querystring',
                  locationName: 'originRestrictionType'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                allowedRepositories: {
                  shape: 'S3i'
                },
                nextToken: {}
              }
            }
          },
          ListAssociatedPackages: {
            http: {
              method: 'GET',
              requestUri: '/v1/list-associated-packages'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                preview: {
                  location: 'querystring',
                  locationName: 'preview',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      format: {},
                      namespace: {},
                      'package': {},
                      associationType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDomains: {
            http: {
              requestUri: '/v1/domains'
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      owner: {},
                      arn: {},
                      status: {},
                      createdTime: {
                        type: 'timestamp'
                      },
                      encryptionKey: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPackageGroups: {
            http: {
              requestUri: '/v1/package-groups'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                prefix: {
                  location: 'querystring',
                  locationName: 'prefix'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroups: {
                  shape: 'S3x'
                },
                nextToken: {}
              }
            }
          },
          ListPackageVersionAssets: {
            http: {
              requestUri: '/v1/package/version/assets'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                format: {},
                namespace: {},
                'package': {},
                version: {},
                versionRevision: {},
                nextToken: {},
                assets: {
                  type: 'list',
                  member: {
                    shape: 'S43'
                  }
                }
              }
            }
          },
          ListPackageVersionDependencies: {
            http: {
              requestUri: '/v1/package/version/dependencies'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                format: {},
                namespace: {},
                'package': {},
                version: {},
                versionRevision: {},
                nextToken: {},
                dependencies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      namespace: {},
                      'package': {},
                      dependencyType: {},
                      versionRequirement: {}
                    }
                  }
                }
              }
            }
          },
          ListPackageVersions: {
            http: {
              requestUri: '/v1/package/versions'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                originType: {
                  location: 'querystring',
                  locationName: 'originType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                defaultDisplayVersion: {},
                format: {},
                namespace: {},
                'package': {},
                versions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['version', 'status'],
                    members: {
                      version: {},
                      revision: {},
                      status: {},
                      origin: {
                        shape: 'S2n'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPackages: {
            http: {
              requestUri: '/v1/packages'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                packagePrefix: {
                  location: 'querystring',
                  locationName: 'package-prefix'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                publish: {
                  location: 'querystring',
                  locationName: 'publish'
                },
                upstream: {
                  location: 'querystring',
                  locationName: 'upstream'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packages: {
                  type: 'list',
                  member: {
                    shape: 'S1x'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRepositories: {
            http: {
              requestUri: '/v1/repositories'
            },
            input: {
              type: 'structure',
              members: {
                repositoryPrefix: {
                  location: 'querystring',
                  locationName: 'repository-prefix'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositories: {
                  shape: 'S4n'
                },
                nextToken: {}
              }
            }
          },
          ListRepositoriesInDomain: {
            http: {
              requestUri: '/v1/domain/repositories'
            },
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                administratorAccount: {
                  location: 'querystring',
                  locationName: 'administrator-account'
                },
                repositoryPrefix: {
                  location: 'querystring',
                  locationName: 'repository-prefix'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repositories: {
                  shape: 'S4n'
                },
                nextToken: {}
              }
            }
          },
          ListSubPackageGroups: {
            http: {
              requestUri: '/v1/package-groups/sub-groups'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroups: {
                  shape: 'S3x'
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/v1/tags'
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
                  shape: 'Sz'
                }
              }
            }
          },
          PublishPackageVersion: {
            http: {
              requestUri: '/v1/package/version/publish'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'packageVersion', 'assetContent', 'assetName', 'assetSHA256'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                packageVersion: {
                  location: 'querystring',
                  locationName: 'version'
                },
                assetContent: {
                  shape: 'S37'
                },
                assetName: {
                  location: 'querystring',
                  locationName: 'asset'
                },
                assetSHA256: {
                  location: 'header',
                  locationName: 'x-amz-content-sha256'
                },
                unfinished: {
                  location: 'querystring',
                  locationName: 'unfinished',
                  type: 'boolean'
                }
              },
              payload: 'assetContent'
            },
            output: {
              type: 'structure',
              members: {
                format: {},
                namespace: {},
                'package': {},
                version: {},
                versionRevision: {},
                status: {},
                asset: {
                  shape: 'S43'
                }
              }
            }
          },
          PutDomainPermissionsPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v1/domain/permissions/policy'
            },
            input: {
              type: 'structure',
              required: ['domain', 'policyDocument'],
              members: {
                domain: {},
                domainOwner: {},
                policyRevision: {},
                policyDocument: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          PutPackageOriginConfiguration: {
            http: {
              requestUri: '/v1/package'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'restrictions'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                restrictions: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                originConfiguration: {
                  shape: 'S1y'
                }
              }
            }
          },
          PutRepositoryPermissionsPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v1/repository/permissions/policy'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'policyDocument'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                policyRevision: {},
                policyDocument: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S1t'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tag'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sz'
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
              requestUri: '/v1/untag'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
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
          UpdatePackageGroup: {
            http: {
              method: 'PUT',
              requestUri: '/v1/package-group'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {},
                contactInfo: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                }
              }
            },
            idempotent: true
          },
          UpdatePackageGroupOriginConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v1/package-group-origin-configuration'
            },
            input: {
              type: 'structure',
              required: ['domain', 'packageGroup'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                packageGroup: {
                  location: 'querystring',
                  locationName: 'package-group'
                },
                restrictions: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                addAllowedRepositories: {
                  shape: 'S5e'
                },
                removeAllowedRepositories: {
                  shape: 'S5e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                packageGroup: {
                  shape: 'S1c'
                },
                allowedRepositoryUpdates: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'map',
                    key: {},
                    value: {
                      shape: 'S3i'
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          UpdatePackageVersionsStatus: {
            http: {
              requestUri: '/v1/package/versions/update_status'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository', 'format', 'package', 'versions', 'targetStatus'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                'package': {
                  location: 'querystring',
                  locationName: 'package'
                },
                versions: {
                  shape: 'Sk'
                },
                versionRevisions: {
                  shape: 'Sm'
                },
                expectedStatus: {},
                targetStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulVersions: {
                  shape: 'Sq'
                },
                failedVersions: {
                  shape: 'Su'
                }
              }
            }
          },
          UpdateRepository: {
            http: {
              method: 'PUT',
              requestUri: '/v1/repository'
            },
            input: {
              type: 'structure',
              required: ['domain', 'repository'],
              members: {
                domain: {
                  location: 'querystring',
                  locationName: 'domain'
                },
                domainOwner: {
                  location: 'querystring',
                  locationName: 'domain-owner'
                },
                repository: {
                  location: 'querystring',
                  locationName: 'repository'
                },
                description: {},
                upstreams: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                repository: {
                  shape: 'S7'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            members: {
              name: {},
              administratorAccount: {},
              domainName: {},
              domainOwner: {},
              arn: {},
              description: {},
              upstreams: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    repositoryName: {}
                  }
                }
              },
              externalConnections: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    externalConnectionName: {},
                    packageFormat: {},
                    status: {}
                  }
                }
              },
              createdTime: {
                type: 'timestamp'
              }
            }
          },
          Sk: {
            type: 'list',
            member: {}
          },
          Sm: {
            type: 'map',
            key: {},
            value: {}
          },
          Sq: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                revision: {},
                status: {}
              }
            }
          },
          Su: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                errorCode: {},
                errorMessage: {}
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              name: {},
              owner: {},
              arn: {},
              status: {},
              createdTime: {
                type: 'timestamp'
              },
              encryptionKey: {},
              repositoryCount: {
                type: 'integer'
              },
              assetSizeBytes: {
                type: 'long'
              },
              s3BucketArn: {}
            }
          },
          S1c: {
            type: 'structure',
            members: {
              arn: {},
              pattern: {},
              domainName: {},
              domainOwner: {},
              createdTime: {
                type: 'timestamp'
              },
              contactInfo: {},
              description: {},
              originConfiguration: {
                shape: 'S1d'
              },
              parent: {
                shape: 'S1i'
              }
            }
          },
          S1d: {
            type: 'structure',
            members: {
              restrictions: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    mode: {},
                    effectiveMode: {},
                    inheritedFrom: {
                      shape: 'S1i'
                    },
                    repositoriesCount: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S1i: {
            type: 'structure',
            members: {
              arn: {},
              pattern: {}
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['repositoryName'],
              members: {
                repositoryName: {}
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              resourceArn: {},
              revision: {},
              document: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              format: {},
              namespace: {},
              'package': {},
              originConfiguration: {
                shape: 'S1y'
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              restrictions: {
                shape: 'S1z'
              }
            }
          },
          S1z: {
            type: 'structure',
            required: ['publish', 'upstream'],
            members: {
              publish: {},
              upstream: {}
            }
          },
          S2n: {
            type: 'structure',
            members: {
              domainEntryPoint: {
                type: 'structure',
                members: {
                  repositoryName: {},
                  externalConnectionName: {}
                }
              },
              originType: {}
            }
          },
          S37: {
            type: 'blob',
            streaming: true
          },
          S3i: {
            type: 'list',
            member: {}
          },
          S3x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                pattern: {},
                domainName: {},
                domainOwner: {},
                createdTime: {
                  type: 'timestamp'
                },
                contactInfo: {},
                description: {},
                originConfiguration: {
                  shape: 'S1d'
                },
                parent: {
                  shape: 'S1i'
                }
              }
            }
          },
          S43: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              size: {
                type: 'long'
              },
              hashes: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S4n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                administratorAccount: {},
                domainName: {},
                domainOwner: {},
                arn: {},
                description: {},
                createdTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S5e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                repositoryName: {},
                originRestrictionType: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fb4a017a4ffbe5cc1e13654b805eede44d7322fc.js.map