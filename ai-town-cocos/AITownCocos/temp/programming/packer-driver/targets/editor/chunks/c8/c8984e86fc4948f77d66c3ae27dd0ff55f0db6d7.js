System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'datazone',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon DataZone',
          serviceId: 'DataZone',
          signatureVersion: 'v4',
          signingName: 'datazone',
          uid: 'datazone-2018-05-10'
        },
        operations: {
          AcceptPredictions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                acceptChoices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['predictionTarget'],
                    members: {
                      editedValue: {
                        type: 'string',
                        sensitive: true
                      },
                      predictionChoice: {
                        type: 'integer'
                      },
                      predictionTarget: {}
                    }
                  }
                },
                acceptRule: {
                  type: 'structure',
                  members: {
                    rule: {},
                    threshold: {
                      type: 'float'
                    }
                  }
                },
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                revision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'domainId', 'revision'],
              members: {
                assetId: {},
                domainId: {},
                revision: {}
              }
            },
            idempotent: true
          },
          AcceptSubscriptionRequest: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                decisionComment: {
                  shape: 'Sh'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                decisionComment: {
                  shape: 'Sh'
                },
                domainId: {},
                id: {},
                requestReason: {
                  shape: 'Sm'
                },
                reviewerId: {},
                status: {},
                subscribedListings: {
                  type: 'list',
                  member: {
                    shape: 'Sp'
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          CancelMetadataGenerationRun: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelSubscription: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'status', 'subscribedListing', 'subscribedPrincipal', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                id: {},
                retainPermissions: {
                  type: 'boolean'
                },
                status: {},
                subscribedListing: {
                  shape: 'Sp'
                },
                subscribedPrincipal: {
                  shape: 'S13'
                },
                subscriptionRequestId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          CreateAsset: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/assets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'name', 'owningProjectIdentifier', 'typeIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                externalIdentifier: {
                  shape: 'S1h'
                },
                formsInput: {
                  shape: 'S1i'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                name: {
                  shape: 'S1p'
                },
                owningProjectIdentifier: {},
                predictionConfiguration: {
                  shape: 'S1q'
                },
                typeIdentifier: {},
                typeRevision: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'formsOutput', 'id', 'name', 'owningProjectId', 'revision', 'typeIdentifier', 'typeRevision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                externalIdentifier: {
                  shape: 'S1h'
                },
                firstRevisionCreatedAt: {
                  type: 'timestamp'
                },
                firstRevisionCreatedBy: {},
                formsOutput: {
                  shape: 'S1u'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                latestTimeSeriesDataPointFormsOutput: {
                  shape: 'S1x'
                },
                listing: {
                  shape: 'S23'
                },
                name: {
                  shape: 'S1p'
                },
                owningProjectId: {},
                predictionConfiguration: {
                  shape: 'S1q'
                },
                readOnlyFormsOutput: {
                  shape: 'S1u'
                },
                revision: {},
                typeIdentifier: {},
                typeRevision: {}
              }
            },
            idempotent: true
          },
          CreateAssetRevision: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}/revisions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                formsInput: {
                  shape: 'S1i'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {
                  shape: 'S1p'
                },
                predictionConfiguration: {
                  shape: 'S1q'
                },
                typeRevision: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'formsOutput', 'id', 'name', 'owningProjectId', 'revision', 'typeIdentifier', 'typeRevision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                externalIdentifier: {
                  shape: 'S1h'
                },
                firstRevisionCreatedAt: {
                  type: 'timestamp'
                },
                firstRevisionCreatedBy: {},
                formsOutput: {
                  shape: 'S1u'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                latestTimeSeriesDataPointFormsOutput: {
                  shape: 'S1x'
                },
                listing: {
                  shape: 'S23'
                },
                name: {
                  shape: 'S1p'
                },
                owningProjectId: {},
                predictionConfiguration: {
                  shape: 'S1q'
                },
                readOnlyFormsOutput: {
                  shape: 'S1u'
                },
                revision: {},
                typeIdentifier: {},
                typeRevision: {}
              }
            },
            idempotent: true
          },
          CreateAssetType: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/asset-types',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'formsInput', 'name', 'owningProjectIdentifier'],
              members: {
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                formsInput: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['typeIdentifier', 'typeRevision'],
                    members: {
                      required: {
                        type: 'boolean'
                      },
                      typeIdentifier: {},
                      typeRevision: {}
                    }
                  }
                },
                name: {},
                owningProjectIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'formsOutput', 'name', 'revision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                formsOutput: {
                  shape: 'S2b'
                },
                name: {},
                originDomainId: {},
                originProjectId: {},
                owningProjectId: {},
                revision: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          CreateDataSource: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/data-sources',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier', 'name', 'projectIdentifier', 'type'],
              members: {
                assetFormsInput: {
                  shape: 'S1i'
                },
                clientToken: {
                  idempotencyToken: true
                },
                configuration: {
                  shape: 'S2e'
                },
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                enableSetting: {},
                environmentIdentifier: {},
                name: {
                  shape: 'S2z'
                },
                projectIdentifier: {},
                publishOnImport: {
                  type: 'boolean'
                },
                recommendation: {
                  shape: 'S30'
                },
                schedule: {
                  shape: 'S31'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentId', 'id', 'name', 'projectId'],
              members: {
                assetFormsOutput: {
                  shape: 'S1u'
                },
                configuration: {
                  shape: 'S36'
                },
                createdAt: {
                  shape: 'S3f'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                enableSetting: {},
                environmentId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                lastRunAt: {
                  shape: 'S3f'
                },
                lastRunErrorMessage: {
                  shape: 'S3h'
                },
                lastRunStatus: {},
                name: {
                  shape: 'S2z'
                },
                projectId: {},
                publishOnImport: {
                  type: 'boolean'
                },
                recommendation: {
                  shape: 'S30'
                },
                schedule: {
                  shape: 'S31'
                },
                status: {},
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            },
            idempotent: true
          },
          CreateDomain: {
            http: {
              requestUri: '/v2/domains',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainExecutionRole', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                domainExecutionRole: {},
                kmsKeyIdentifier: {},
                name: {},
                singleSignOn: {
                  shape: 'S3p'
                },
                tags: {
                  shape: 'S3s'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id'],
              members: {
                arn: {},
                description: {},
                domainExecutionRole: {},
                id: {},
                kmsKeyIdentifier: {},
                name: {},
                portalUrl: {},
                singleSignOn: {
                  shape: 'S3p'
                },
                status: {},
                tags: {
                  shape: 'S3s'
                }
              }
            },
            idempotent: true
          },
          CreateEnvironment: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/environments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentProfileIdentifier', 'name', 'projectIdentifier'],
              members: {
                description: {},
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentProfileIdentifier: {},
                glossaryTerms: {
                  shape: 'S1n'
                },
                name: {},
                projectIdentifier: {},
                userParameters: {
                  shape: 'S3z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentProfileId', 'name', 'projectId', 'provider'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                deploymentProperties: {
                  shape: 'S45'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentActions: {
                  shape: 'S48'
                },
                environmentBlueprintId: {},
                environmentProfileId: {},
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastDeployment: {
                  shape: 'S4e'
                },
                name: {
                  shape: 'S4k'
                },
                projectId: {},
                provider: {},
                provisionedResources: {
                  shape: 'S4l'
                },
                provisioningProperties: {
                  shape: 'S4n'
                },
                status: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          CreateEnvironmentProfile: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/environment-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentBlueprintIdentifier', 'name', 'projectIdentifier'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentBlueprintIdentifier: {},
                name: {
                  shape: 'S4u'
                },
                projectIdentifier: {},
                userParameters: {
                  shape: 'S3z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentBlueprintId', 'id', 'name'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentBlueprintId: {},
                id: {},
                name: {
                  shape: 'S4u'
                },
                projectId: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          CreateFormType: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/form-types',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'model', 'name', 'owningProjectIdentifier'],
              members: {
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                model: {
                  shape: 'S4x'
                },
                name: {
                  shape: 'S1w'
                },
                owningProjectIdentifier: {},
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'name', 'revision'],
              members: {
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                name: {
                  shape: 'S1w'
                },
                originDomainId: {},
                originProjectId: {},
                owningProjectId: {},
                revision: {}
              }
            }
          },
          CreateGlossary: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/glossaries',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'name', 'owningProjectIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'S52'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                name: {
                  shape: 'S53'
                },
                owningProjectIdentifier: {},
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id', 'name', 'owningProjectId'],
              members: {
                description: {
                  shape: 'S52'
                },
                domainId: {},
                id: {},
                name: {
                  shape: 'S53'
                },
                owningProjectId: {},
                status: {}
              }
            },
            idempotent: true
          },
          CreateGlossaryTerm: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/glossary-terms',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'glossaryIdentifier', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                glossaryIdentifier: {},
                longDescription: {
                  shape: 'S58'
                },
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                },
                status: {},
                termRelations: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'glossaryId', 'id', 'name', 'status'],
              members: {
                domainId: {},
                glossaryId: {},
                id: {},
                longDescription: {
                  shape: 'S58'
                },
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                },
                status: {},
                termRelations: {
                  shape: 'S5a'
                }
              }
            },
            idempotent: true
          },
          CreateGroupProfile: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/group-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'groupIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                groupIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainId: {},
                groupName: {
                  shape: 'S5h'
                },
                id: {},
                status: {}
              }
            },
            idempotent: true
          },
          CreateListingChangeSet: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/listings/change-set',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['action', 'domainIdentifier', 'entityIdentifier', 'entityType'],
              members: {
                action: {},
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                entityIdentifier: {},
                entityRevision: {},
                entityType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['listingId', 'listingRevision', 'status'],
              members: {
                listingId: {},
                listingRevision: {},
                status: {}
              }
            }
          },
          CreateProject: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/projects',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'name'],
              members: {
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                name: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'id', 'name'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                failureReasons: {
                  shape: 'S5r'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {
                  shape: 'S15'
                },
                projectStatus: {}
              }
            }
          },
          CreateProjectMembership: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['designation', 'domainIdentifier', 'member', 'projectIdentifier'],
              members: {
                designation: {},
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                member: {
                  shape: 'S5w'
                },
                projectIdentifier: {
                  location: 'uri',
                  locationName: 'projectIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateSubscriptionGrant: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/subscription-grants',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier', 'grantedEntity', 'subscriptionTargetIdentifier'],
              members: {
                assetTargetNames: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assetId', 'targetName'],
                    members: {
                      assetId: {},
                      targetName: {}
                    }
                  }
                },
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {},
                grantedEntity: {
                  type: 'structure',
                  members: {
                    listing: {
                      type: 'structure',
                      required: ['identifier', 'revision'],
                      members: {
                        identifier: {},
                        revision: {}
                      }
                    }
                  },
                  union: true
                },
                subscriptionTargetIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'grantedEntity', 'id', 'status', 'subscriptionTargetId', 'updatedAt'],
              members: {
                assets: {
                  shape: 'S65'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                grantedEntity: {
                  shape: 'S69'
                },
                id: {},
                status: {},
                subscriptionId: {},
                subscriptionTargetId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          CreateSubscriptionRequest: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'requestReason', 'subscribedListings', 'subscribedPrincipals'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                requestReason: {
                  shape: 'Sm'
                },
                subscribedListings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['identifier'],
                    members: {
                      identifier: {}
                    }
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      project: {
                        type: 'structure',
                        members: {
                          identifier: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                decisionComment: {
                  shape: 'Sh'
                },
                domainId: {},
                id: {},
                requestReason: {
                  shape: 'Sm'
                },
                reviewerId: {},
                status: {},
                subscribedListings: {
                  type: 'list',
                  member: {
                    shape: 'Sp'
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          CreateSubscriptionTarget: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicableAssetTypes', 'authorizedPrincipals', 'domainIdentifier', 'environmentIdentifier', 'manageAccessRole', 'name', 'subscriptionTargetConfig', 'type'],
              members: {
                applicableAssetTypes: {
                  shape: 'S6n'
                },
                authorizedPrincipals: {
                  shape: 'S6o'
                },
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'uri',
                  locationName: 'environmentIdentifier'
                },
                manageAccessRole: {},
                name: {
                  shape: 'S6q'
                },
                provider: {},
                subscriptionTargetConfig: {
                  shape: 'S6r'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['applicableAssetTypes', 'authorizedPrincipals', 'createdAt', 'createdBy', 'domainId', 'environmentId', 'id', 'manageAccessRole', 'name', 'projectId', 'provider', 'subscriptionTargetConfig', 'type'],
              members: {
                applicableAssetTypes: {
                  shape: 'S6n'
                },
                authorizedPrincipals: {
                  shape: 'S6o'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                environmentId: {},
                id: {},
                manageAccessRole: {},
                name: {
                  shape: 'S6q'
                },
                projectId: {},
                provider: {},
                subscriptionTargetConfig: {
                  shape: 'S6r'
                },
                type: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          CreateUserProfile: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/user-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'userIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                userIdentifier: {},
                userType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S6y'
                },
                domainId: {},
                id: {},
                status: {},
                type: {}
              }
            },
            idempotent: true
          },
          DeleteAsset: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAssetType: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/asset-types/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/data-sources/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentId', 'id', 'name', 'projectId'],
              members: {
                assetFormsOutput: {
                  shape: 'S1u'
                },
                configuration: {
                  shape: 'S36'
                },
                createdAt: {
                  shape: 'S3f'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                enableSetting: {},
                environmentId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                lastRunAt: {
                  shape: 'S3f'
                },
                lastRunErrorMessage: {
                  shape: 'S3h'
                },
                lastRunStatus: {},
                name: {
                  shape: 'S2z'
                },
                projectId: {},
                publishOnImport: {
                  type: 'boolean'
                },
                schedule: {
                  shape: 'S31'
                },
                status: {},
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            },
            idempotent: true
          },
          DeleteDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{identifier}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                skipDeletionCheck: {
                  location: 'querystring',
                  locationName: 'skipDeletionCheck',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironmentBlueprintConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentBlueprintIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentBlueprintIdentifier: {
                  location: 'uri',
                  locationName: 'environmentBlueprintIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteEnvironmentProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/environment-profiles/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            idempotent: true
          },
          DeleteFormType: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'formTypeIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                formTypeIdentifier: {
                  location: 'uri',
                  locationName: 'formTypeIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteGlossary: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/glossaries/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteGlossaryTerm: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/glossary-terms/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteListing: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/listings/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/projects/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                skipDeletionCheck: {
                  location: 'querystring',
                  locationName: 'skipDeletionCheck',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProjectMembership: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'member', 'projectIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                member: {
                  shape: 'S5w'
                },
                projectIdentifier: {
                  location: 'uri',
                  locationName: 'projectIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSubscriptionGrant: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-grants/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'grantedEntity', 'id', 'status', 'subscriptionTargetId', 'updatedAt'],
              members: {
                assets: {
                  shape: 'S65'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                grantedEntity: {
                  shape: 'S69'
                },
                id: {},
                status: {},
                subscriptionId: {},
                subscriptionTargetId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          DeleteSubscriptionRequest: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            }
          },
          DeleteSubscriptionTarget: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'uri',
                  locationName: 'environmentIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            }
          },
          DeleteTimeSeriesDataPoints: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'entityIdentifier', 'entityType', 'formName'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                entityIdentifier: {
                  location: 'uri',
                  locationName: 'entityIdentifier'
                },
                entityType: {
                  location: 'uri',
                  locationName: 'entityType'
                },
                formName: {
                  location: 'querystring',
                  locationName: 'formName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAsset: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                revision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'formsOutput', 'id', 'name', 'owningProjectId', 'revision', 'typeIdentifier', 'typeRevision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                externalIdentifier: {
                  shape: 'S1h'
                },
                firstRevisionCreatedAt: {
                  type: 'timestamp'
                },
                firstRevisionCreatedBy: {},
                formsOutput: {
                  shape: 'S1u'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                latestTimeSeriesDataPointFormsOutput: {
                  shape: 'S1x'
                },
                listing: {
                  shape: 'S23'
                },
                name: {
                  shape: 'S1p'
                },
                owningProjectId: {},
                readOnlyFormsOutput: {
                  shape: 'S1u'
                },
                revision: {},
                typeIdentifier: {},
                typeRevision: {}
              }
            }
          },
          GetAssetType: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/asset-types/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                revision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'formsOutput', 'name', 'owningProjectId', 'revision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                formsOutput: {
                  shape: 'S2b'
                },
                name: {},
                originDomainId: {},
                originProjectId: {},
                owningProjectId: {},
                revision: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetDataSource: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/data-sources/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentId', 'id', 'name', 'projectId'],
              members: {
                assetFormsOutput: {
                  shape: 'S1u'
                },
                configuration: {
                  shape: 'S36'
                },
                createdAt: {
                  shape: 'S3f'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                enableSetting: {},
                environmentId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                lastRunAssetCount: {
                  type: 'integer'
                },
                lastRunAt: {
                  shape: 'S3f'
                },
                lastRunErrorMessage: {
                  shape: 'S3h'
                },
                lastRunStatus: {},
                name: {
                  shape: 'S2z'
                },
                projectId: {},
                publishOnImport: {
                  type: 'boolean'
                },
                recommendation: {
                  shape: 'S30'
                },
                schedule: {
                  shape: 'S31'
                },
                status: {},
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            }
          },
          GetDataSourceRun: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/data-source-runs/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'dataSourceId', 'domainId', 'id', 'projectId', 'status', 'type', 'updatedAt'],
              members: {
                createdAt: {
                  shape: 'S3f'
                },
                dataSourceConfigurationSnapshot: {},
                dataSourceId: {},
                domainId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                projectId: {},
                runStatisticsForAssets: {
                  shape: 'S8b'
                },
                startedAt: {
                  shape: 'S3f'
                },
                status: {},
                stoppedAt: {
                  shape: 'S3f'
                },
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            }
          },
          GetDomain: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainExecutionRole', 'id', 'status'],
              members: {
                arn: {},
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                domainExecutionRole: {},
                id: {},
                kmsKeyIdentifier: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                name: {},
                portalUrl: {},
                singleSignOn: {
                  shape: 'S3p'
                },
                status: {},
                tags: {
                  shape: 'S3s'
                }
              }
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentProfileId', 'name', 'projectId', 'provider'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                deploymentProperties: {
                  shape: 'S45'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentActions: {
                  shape: 'S48'
                },
                environmentBlueprintId: {},
                environmentProfileId: {},
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastDeployment: {
                  shape: 'S4e'
                },
                name: {
                  shape: 'S4k'
                },
                projectId: {},
                provider: {},
                provisionedResources: {
                  shape: 'S4l'
                },
                provisioningProperties: {
                  shape: 'S4n'
                },
                status: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          GetEnvironmentBlueprint: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'name', 'provider', 'provisioningProperties'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                deploymentProperties: {
                  shape: 'S45'
                },
                description: {
                  shape: 'Sq'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                name: {},
                provider: {},
                provisioningProperties: {
                  shape: 'S4n'
                },
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          GetEnvironmentBlueprintConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentBlueprintIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentBlueprintIdentifier: {
                  location: 'uri',
                  locationName: 'environmentBlueprintIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentBlueprintId'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                domainId: {},
                enabledRegions: {
                  shape: 'S8m'
                },
                environmentBlueprintId: {},
                manageAccessRoleArn: {},
                provisioningRoleArn: {},
                regionalParameters: {
                  shape: 'S8o'
                },
                updatedAt: {
                  shape: 'S44'
                }
              }
            }
          },
          GetEnvironmentProfile: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-profiles/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentBlueprintId', 'id', 'name'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentBlueprintId: {},
                id: {},
                name: {
                  shape: 'S4u'
                },
                projectId: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          GetFormType: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'formTypeIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                formTypeIdentifier: {
                  location: 'uri',
                  locationName: 'formTypeIdentifier'
                },
                revision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'model', 'name', 'revision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                imports: {
                  shape: 'S8u'
                },
                model: {
                  shape: 'S4x'
                },
                name: {
                  shape: 'S1w'
                },
                originDomainId: {},
                originProjectId: {},
                owningProjectId: {},
                revision: {},
                status: {}
              }
            }
          },
          GetGlossary: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/glossaries/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id', 'name', 'owningProjectId', 'status'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'S52'
                },
                domainId: {},
                id: {},
                name: {
                  shape: 'S53'
                },
                owningProjectId: {},
                status: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetGlossaryTerm: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/glossary-terms/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'glossaryId', 'id', 'name', 'status'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                glossaryId: {},
                id: {},
                longDescription: {
                  shape: 'S58'
                },
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                },
                status: {},
                termRelations: {
                  shape: 'S5a'
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetGroupProfile: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'groupIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                groupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domainId: {},
                groupName: {
                  shape: 'S5h'
                },
                id: {},
                status: {}
              }
            }
          },
          GetIamPortalLoginUrl: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/get-portal-login-url',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['userProfileId'],
              members: {
                authCodeUrl: {},
                userProfileId: {}
              }
            }
          },
          GetListing: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/listings/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                listingRevision: {
                  location: 'querystring',
                  locationName: 'listingRevision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id', 'listingRevision'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                id: {},
                item: {
                  type: 'structure',
                  members: {
                    assetListing: {
                      type: 'structure',
                      members: {
                        assetId: {},
                        assetRevision: {},
                        assetType: {},
                        createdAt: {
                          type: 'timestamp'
                        },
                        forms: {},
                        glossaryTerms: {
                          shape: 'Sw'
                        },
                        latestTimeSeriesDataPointForms: {
                          shape: 'S1x'
                        },
                        owningProjectId: {}
                      }
                    }
                  },
                  union: true
                },
                listingRevision: {},
                name: {},
                status: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetMetadataGenerationRun: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id', 'owningProjectId'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                id: {},
                owningProjectId: {},
                status: {},
                target: {
                  shape: 'S9b'
                },
                type: {}
              }
            }
          },
          GetProject: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/projects/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'id', 'name'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                failureReasons: {
                  shape: 'S5r'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {
                  shape: 'S15'
                },
                projectStatus: {}
              }
            }
          },
          GetSubscription: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscriptions/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'status', 'subscribedListing', 'subscribedPrincipal', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                id: {},
                retainPermissions: {
                  type: 'boolean'
                },
                status: {},
                subscribedListing: {
                  shape: 'Sp'
                },
                subscribedPrincipal: {
                  shape: 'S13'
                },
                subscriptionRequestId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetSubscriptionGrant: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-grants/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'grantedEntity', 'id', 'status', 'subscriptionTargetId', 'updatedAt'],
              members: {
                assets: {
                  shape: 'S65'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                grantedEntity: {
                  shape: 'S69'
                },
                id: {},
                status: {},
                subscriptionId: {},
                subscriptionTargetId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetSubscriptionRequestDetails: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                decisionComment: {
                  shape: 'Sh'
                },
                domainId: {},
                id: {},
                requestReason: {
                  shape: 'Sm'
                },
                reviewerId: {},
                status: {},
                subscribedListings: {
                  type: 'list',
                  member: {
                    shape: 'Sp'
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetSubscriptionTarget: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'uri',
                  locationName: 'environmentIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicableAssetTypes', 'authorizedPrincipals', 'createdAt', 'createdBy', 'domainId', 'environmentId', 'id', 'manageAccessRole', 'name', 'projectId', 'provider', 'subscriptionTargetConfig', 'type'],
              members: {
                applicableAssetTypes: {
                  shape: 'S6n'
                },
                authorizedPrincipals: {
                  shape: 'S6o'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                environmentId: {},
                id: {},
                manageAccessRole: {},
                name: {
                  shape: 'S6q'
                },
                projectId: {},
                provider: {},
                subscriptionTargetConfig: {
                  shape: 'S6r'
                },
                type: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            }
          },
          GetTimeSeriesDataPoint: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'entityIdentifier', 'entityType', 'formName', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                entityIdentifier: {
                  location: 'uri',
                  locationName: 'entityIdentifier'
                },
                entityType: {
                  location: 'uri',
                  locationName: 'entityType'
                },
                formName: {
                  location: 'querystring',
                  locationName: 'formName'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domainId: {},
                entityId: {},
                entityType: {},
                form: {
                  shape: 'S9u'
                },
                formName: {}
              }
            }
          },
          GetUserProfile: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'userIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                userIdentifier: {
                  location: 'uri',
                  locationName: 'userIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S6y'
                },
                domainId: {},
                id: {},
                status: {},
                type: {}
              }
            }
          },
          ListAssetRevisions: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}/revisions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      domainId: {},
                      id: {},
                      revision: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSourceRunActivities: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'dataAssetStatus', 'dataSourceRunId', 'database', 'projectId', 'technicalName', 'updatedAt'],
                    members: {
                      createdAt: {
                        shape: 'S3f'
                      },
                      dataAssetId: {},
                      dataAssetStatus: {},
                      dataSourceRunId: {},
                      database: {
                        shape: 'S2z'
                      },
                      errorMessage: {
                        shape: 'S3h'
                      },
                      projectId: {},
                      technicalDescription: {
                        shape: 'Sq'
                      },
                      technicalName: {
                        shape: 'S2z'
                      },
                      updatedAt: {
                        shape: 'S3f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSourceRuns: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceIdentifier', 'domainIdentifier'],
              members: {
                dataSourceIdentifier: {
                  location: 'uri',
                  locationName: 'dataSourceIdentifier'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'dataSourceId', 'id', 'projectId', 'status', 'type', 'updatedAt'],
                    members: {
                      createdAt: {
                        shape: 'S3f'
                      },
                      dataSourceId: {},
                      errorMessage: {
                        shape: 'S3h'
                      },
                      id: {},
                      projectId: {},
                      runStatisticsForAssets: {
                        shape: 'S8b'
                      },
                      startedAt: {
                        shape: 'S3f'
                      },
                      status: {},
                      stoppedAt: {
                        shape: 'S3f'
                      },
                      type: {},
                      updatedAt: {
                        shape: 'S3f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSources: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/data-sources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'projectIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'querystring',
                  locationName: 'environmentIdentifier'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  shape: 'S2z',
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                projectIdentifier: {
                  location: 'querystring',
                  locationName: 'projectIdentifier'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['dataSourceId', 'domainId', 'environmentId', 'name', 'status', 'type'],
                    members: {
                      createdAt: {
                        shape: 'S3f'
                      },
                      dataSourceId: {},
                      domainId: {},
                      enableSetting: {},
                      environmentId: {},
                      lastRunAssetCount: {
                        type: 'integer'
                      },
                      lastRunAt: {
                        shape: 'S3f'
                      },
                      lastRunErrorMessage: {
                        shape: 'S3h'
                      },
                      lastRunStatus: {},
                      name: {
                        shape: 'S2z'
                      },
                      schedule: {
                        shape: 'S31'
                      },
                      status: {},
                      type: {},
                      updatedAt: {
                        shape: 'S3f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDomains: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains',
              responseCode: 200
            },
            input: {
              type: 'structure',
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdAt', 'id', 'managedAccountId', 'name', 'status'],
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      description: {
                        type: 'string',
                        sensitive: true
                      },
                      id: {},
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      managedAccountId: {},
                      name: {
                        type: 'string',
                        sensitive: true
                      },
                      portalUrl: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironmentBlueprintConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprint-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['domainId', 'environmentBlueprintId'],
                    members: {
                      createdAt: {
                        shape: 'S44'
                      },
                      domainId: {},
                      enabledRegions: {
                        shape: 'S8m'
                      },
                      environmentBlueprintId: {},
                      manageAccessRoleArn: {},
                      provisioningRoleArn: {},
                      regionalParameters: {
                        shape: 'S8o'
                      },
                      updatedAt: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironmentBlueprints: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                managed: {
                  location: 'querystring',
                  locationName: 'managed',
                  type: 'boolean'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'provider', 'provisioningProperties'],
                    members: {
                      createdAt: {
                        shape: 'S44'
                      },
                      description: {
                        shape: 'Sq'
                      },
                      id: {},
                      name: {},
                      provider: {},
                      provisioningProperties: {
                        shape: 'S4n'
                      },
                      updatedAt: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironmentProfiles: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environment-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                awsAccountId: {
                  location: 'querystring',
                  locationName: 'awsAccountId'
                },
                awsAccountRegion: {
                  location: 'querystring',
                  locationName: 'awsAccountRegion'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentBlueprintIdentifier: {
                  location: 'querystring',
                  locationName: 'environmentBlueprintIdentifier'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  shape: 'S4u',
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                projectIdentifier: {
                  location: 'querystring',
                  locationName: 'projectIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdBy', 'domainId', 'environmentBlueprintId', 'id', 'name'],
                    members: {
                      awsAccountId: {},
                      awsAccountRegion: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      createdBy: {},
                      description: {
                        shape: 'Sq'
                      },
                      domainId: {},
                      environmentBlueprintId: {},
                      id: {},
                      name: {
                        shape: 'S4u'
                      },
                      projectId: {},
                      updatedAt: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'projectIdentifier'],
              members: {
                awsAccountId: {
                  location: 'querystring',
                  locationName: 'awsAccountId'
                },
                awsAccountRegion: {
                  location: 'querystring',
                  locationName: 'awsAccountRegion'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentBlueprintIdentifier: {
                  location: 'querystring',
                  locationName: 'environmentBlueprintIdentifier'
                },
                environmentProfileIdentifier: {
                  location: 'querystring',
                  locationName: 'environmentProfileIdentifier'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                projectIdentifier: {
                  location: 'querystring',
                  locationName: 'projectIdentifier'
                },
                provider: {
                  location: 'querystring',
                  locationName: 'provider'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdBy', 'domainId', 'environmentProfileId', 'name', 'projectId', 'provider'],
                    members: {
                      awsAccountId: {},
                      awsAccountRegion: {},
                      createdAt: {
                        shape: 'S44'
                      },
                      createdBy: {},
                      description: {
                        shape: 'Sq'
                      },
                      domainId: {},
                      environmentProfileId: {},
                      id: {},
                      name: {
                        shape: 'S4k'
                      },
                      projectId: {},
                      provider: {},
                      status: {},
                      updatedAt: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMetadataGenerationRuns: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/metadata-generation-runs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['domainId', 'id', 'owningProjectId'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      domainId: {},
                      id: {},
                      owningProjectId: {},
                      status: {},
                      target: {
                        shape: 'S9b'
                      },
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNotifications: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/notifications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'type'],
              members: {
                afterTimestamp: {
                  location: 'querystring',
                  locationName: 'afterTimestamp',
                  type: 'timestamp'
                },
                beforeTimestamp: {
                  location: 'querystring',
                  locationName: 'beforeTimestamp',
                  type: 'timestamp'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                subjects: {
                  location: 'querystring',
                  locationName: 'subjects',
                  type: 'list',
                  member: {}
                },
                taskStatus: {
                  location: 'querystring',
                  locationName: 'taskStatus'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                notifications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actionLink', 'creationTimestamp', 'domainIdentifier', 'identifier', 'lastUpdatedTimestamp', 'message', 'title', 'topic', 'type'],
                    members: {
                      actionLink: {
                        type: 'string',
                        sensitive: true
                      },
                      creationTimestamp: {
                        type: 'timestamp'
                      },
                      domainIdentifier: {},
                      identifier: {},
                      lastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      message: {
                        type: 'string',
                        sensitive: true
                      },
                      metadata: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      status: {},
                      title: {
                        type: 'string',
                        sensitive: true
                      },
                      topic: {
                        type: 'structure',
                        required: ['resource', 'role', 'subject'],
                        members: {
                          resource: {
                            type: 'structure',
                            required: ['id', 'type'],
                            members: {
                              id: {},
                              name: {},
                              type: {}
                            }
                          },
                          role: {},
                          subject: {}
                        }
                      },
                      type: {}
                    }
                  }
                }
              }
            }
          },
          ListProjectMemberships: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'projectIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                projectIdentifier: {
                  location: 'uri',
                  locationName: 'projectIdentifier'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['members'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['designation', 'memberDetails'],
                    members: {
                      designation: {},
                      memberDetails: {
                        type: 'structure',
                        members: {
                          group: {
                            type: 'structure',
                            required: ['groupId'],
                            members: {
                              groupId: {}
                            }
                          },
                          user: {
                            type: 'structure',
                            required: ['userId'],
                            members: {
                              userId: {}
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/projects',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                groupIdentifier: {
                  location: 'querystring',
                  locationName: 'groupIdentifier'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  shape: 'S15',
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                userIdentifier: {
                  location: 'querystring',
                  locationName: 'userIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdBy', 'domainId', 'id', 'name'],
                    members: {
                      createdAt: {
                        shape: 'S44'
                      },
                      createdBy: {},
                      description: {
                        shape: 'Sq'
                      },
                      domainId: {},
                      failureReasons: {
                        shape: 'S5r'
                      },
                      id: {},
                      name: {
                        shape: 'S15'
                      },
                      projectStatus: {},
                      updatedAt: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSubscriptionGrants: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-grants',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentId: {
                  location: 'querystring',
                  locationName: 'environmentId'
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
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                },
                subscribedListingId: {
                  location: 'querystring',
                  locationName: 'subscribedListingId'
                },
                subscriptionId: {
                  location: 'querystring',
                  locationName: 'subscriptionId'
                },
                subscriptionTargetId: {
                  location: 'querystring',
                  locationName: 'subscriptionTargetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'domainId', 'grantedEntity', 'id', 'status', 'subscriptionTargetId', 'updatedAt'],
                    members: {
                      assets: {
                        shape: 'S65'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      domainId: {},
                      grantedEntity: {
                        shape: 'S69'
                      },
                      id: {},
                      status: {},
                      subscriptionId: {},
                      subscriptionTargetId: {},
                      updatedAt: {
                        type: 'timestamp'
                      },
                      updatedBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSubscriptionRequests: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                approverProjectId: {
                  location: 'querystring',
                  locationName: 'approverProjectId'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                owningProjectId: {
                  location: 'querystring',
                  locationName: 'owningProjectId'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                subscribedListingId: {
                  location: 'querystring',
                  locationName: 'subscribedListingId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      decisionComment: {
                        shape: 'Sh'
                      },
                      domainId: {},
                      id: {},
                      requestReason: {
                        shape: 'Sm'
                      },
                      reviewerId: {},
                      status: {},
                      subscribedListings: {
                        type: 'list',
                        member: {
                          shape: 'Sp'
                        }
                      },
                      subscribedPrincipals: {
                        type: 'list',
                        member: {
                          shape: 'S13'
                        }
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      updatedBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSubscriptionTargets: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'uri',
                  locationName: 'environmentIdentifier'
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
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicableAssetTypes', 'authorizedPrincipals', 'createdAt', 'createdBy', 'domainId', 'environmentId', 'id', 'manageAccessRole', 'name', 'projectId', 'provider', 'subscriptionTargetConfig', 'type'],
                    members: {
                      applicableAssetTypes: {
                        shape: 'S6n'
                      },
                      authorizedPrincipals: {
                        shape: 'S6o'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      domainId: {},
                      environmentId: {},
                      id: {},
                      manageAccessRole: {},
                      name: {
                        shape: 'S6q'
                      },
                      projectId: {},
                      provider: {},
                      subscriptionTargetConfig: {
                        shape: 'S6r'
                      },
                      type: {},
                      updatedAt: {
                        type: 'timestamp'
                      },
                      updatedBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSubscriptions: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/subscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                approverProjectId: {
                  location: 'querystring',
                  locationName: 'approverProjectId'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
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
                owningProjectId: {
                  location: 'querystring',
                  locationName: 'owningProjectId'
                },
                sortBy: {
                  location: 'querystring',
                  locationName: 'sortBy'
                },
                sortOrder: {
                  location: 'querystring',
                  locationName: 'sortOrder'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                subscribedListingId: {
                  location: 'querystring',
                  locationName: 'subscribedListingId'
                },
                subscriptionRequestIdentifier: {
                  location: 'querystring',
                  locationName: 'subscriptionRequestIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'createdBy', 'domainId', 'id', 'status', 'subscribedListing', 'subscribedPrincipal', 'updatedAt'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      domainId: {},
                      id: {},
                      retainPermissions: {
                        type: 'boolean'
                      },
                      status: {},
                      subscribedListing: {
                        shape: 'Sp'
                      },
                      subscribedPrincipal: {
                        shape: 'S13'
                      },
                      subscriptionRequestId: {},
                      updatedAt: {
                        type: 'timestamp'
                      },
                      updatedBy: {}
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
              requestUri: '/tags/{resourceArn}',
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
                  shape: 'S3s'
                }
              }
            }
          },
          ListTimeSeriesDataPoints: {
            http: {
              method: 'GET',
              requestUri: '/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'entityIdentifier', 'entityType', 'formName'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                endedAt: {
                  location: 'querystring',
                  locationName: 'endedAt',
                  type: 'timestamp'
                },
                entityIdentifier: {
                  location: 'uri',
                  locationName: 'entityIdentifier'
                },
                entityType: {
                  location: 'uri',
                  locationName: 'entityType'
                },
                formName: {
                  location: 'querystring',
                  locationName: 'formName'
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
                startedAt: {
                  location: 'querystring',
                  locationName: 'startedAt',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  shape: 'S1x'
                },
                nextToken: {}
              }
            }
          },
          PostTimeSeriesDataPoints: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'entityIdentifier', 'entityType', 'forms'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                entityIdentifier: {
                  location: 'uri',
                  locationName: 'entityIdentifier'
                },
                entityType: {
                  location: 'uri',
                  locationName: 'entityType'
                },
                forms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['formName', 'timestamp', 'typeIdentifier'],
                    members: {
                      content: {},
                      formName: {},
                      timestamp: {
                        type: 'timestamp'
                      },
                      typeIdentifier: {},
                      typeRevision: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domainId: {},
                entityId: {},
                entityType: {},
                forms: {
                  type: 'list',
                  member: {
                    shape: 'S9u'
                  }
                }
              }
            },
            idempotent: true
          },
          PutEnvironmentBlueprintConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'enabledRegions', 'environmentBlueprintIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                enabledRegions: {
                  shape: 'S8m'
                },
                environmentBlueprintIdentifier: {
                  location: 'uri',
                  locationName: 'environmentBlueprintIdentifier'
                },
                manageAccessRoleArn: {},
                provisioningRoleArn: {},
                regionalParameters: {
                  shape: 'S8o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentBlueprintId'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                domainId: {},
                enabledRegions: {
                  shape: 'S8m'
                },
                environmentBlueprintId: {},
                manageAccessRoleArn: {},
                provisioningRoleArn: {},
                regionalParameters: {
                  shape: 'S8o'
                },
                updatedAt: {
                  shape: 'S44'
                }
              }
            },
            idempotent: true
          },
          RejectPredictions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                rejectChoices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['predictionTarget'],
                    members: {
                      predictionChoices: {
                        type: 'list',
                        member: {
                          type: 'integer'
                        }
                      },
                      predictionTarget: {}
                    }
                  }
                },
                rejectRule: {
                  type: 'structure',
                  members: {
                    rule: {},
                    threshold: {
                      type: 'float'
                    }
                  }
                },
                revision: {
                  location: 'querystring',
                  locationName: 'revision'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'assetRevision', 'domainId'],
              members: {
                assetId: {},
                assetRevision: {},
                domainId: {}
              }
            },
            idempotent: true
          },
          RejectSubscriptionRequest: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                decisionComment: {
                  shape: 'Sh'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                decisionComment: {
                  shape: 'Sh'
                },
                domainId: {},
                id: {},
                requestReason: {
                  shape: 'Sm'
                },
                reviewerId: {},
                status: {},
                subscribedListings: {
                  type: 'list',
                  member: {
                    shape: 'Sp'
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          RevokeSubscription: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                retainPermissions: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'status', 'subscribedListing', 'subscribedPrincipal', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                id: {},
                retainPermissions: {
                  type: 'boolean'
                },
                status: {},
                subscribedListing: {
                  shape: 'Sp'
                },
                subscribedPrincipal: {
                  shape: 'S13'
                },
                subscriptionRequestId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          Search: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'searchScope'],
              members: {
                additionalAttributes: {
                  shape: 'Sda'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                filters: {
                  shape: 'Sdc'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                owningProjectIdentifier: {},
                searchIn: {
                  shape: 'Sdh'
                },
                searchScope: {},
                searchText: {},
                sort: {
                  shape: 'Sdl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      assetItem: {
                        type: 'structure',
                        required: ['domainId', 'identifier', 'name', 'owningProjectId', 'typeIdentifier', 'typeRevision'],
                        members: {
                          additionalAttributes: {
                            type: 'structure',
                            members: {
                              formsOutput: {
                                shape: 'S1u'
                              },
                              latestTimeSeriesDataPointFormsOutput: {
                                shape: 'S1x'
                              },
                              readOnlyFormsOutput: {
                                shape: 'S1u'
                              }
                            }
                          },
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          description: {
                            shape: 'Sq'
                          },
                          domainId: {},
                          externalIdentifier: {
                            shape: 'S1h'
                          },
                          firstRevisionCreatedAt: {
                            type: 'timestamp'
                          },
                          firstRevisionCreatedBy: {},
                          glossaryTerms: {
                            shape: 'S1n'
                          },
                          identifier: {},
                          name: {
                            shape: 'S1p'
                          },
                          owningProjectId: {},
                          typeIdentifier: {},
                          typeRevision: {}
                        }
                      },
                      dataProductItem: {
                        type: 'structure',
                        required: ['domainId', 'id', 'name', 'owningProjectId'],
                        members: {
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          dataProductItems: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                domainId: {},
                                itemId: {}
                              }
                            }
                          },
                          description: {
                            type: 'string',
                            sensitive: true
                          },
                          domainId: {},
                          glossaryTerms: {
                            shape: 'S1n'
                          },
                          id: {},
                          name: {
                            type: 'string',
                            sensitive: true
                          },
                          owningProjectId: {},
                          updatedAt: {
                            type: 'timestamp'
                          },
                          updatedBy: {}
                        }
                      },
                      glossaryItem: {
                        type: 'structure',
                        required: ['domainId', 'id', 'name', 'owningProjectId', 'status'],
                        members: {
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          description: {
                            shape: 'S52'
                          },
                          domainId: {},
                          id: {},
                          name: {
                            shape: 'S53'
                          },
                          owningProjectId: {},
                          status: {},
                          updatedAt: {
                            type: 'timestamp'
                          },
                          updatedBy: {}
                        }
                      },
                      glossaryTermItem: {
                        type: 'structure',
                        required: ['domainId', 'glossaryId', 'id', 'name', 'status'],
                        members: {
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          domainId: {},
                          glossaryId: {},
                          id: {},
                          longDescription: {
                            shape: 'S58'
                          },
                          name: {
                            shape: 'Sy'
                          },
                          shortDescription: {
                            shape: 'Sz'
                          },
                          status: {},
                          termRelations: {
                            shape: 'S5a'
                          },
                          updatedAt: {
                            type: 'timestamp'
                          },
                          updatedBy: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                nextToken: {},
                totalMatchCount: {
                  type: 'integer'
                }
              }
            }
          },
          SearchGroupProfiles: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/search-group-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'groupType'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                groupType: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                searchText: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      domainId: {},
                      groupName: {
                        shape: 'S5h'
                      },
                      id: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchListings: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/listings/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier'],
              members: {
                additionalAttributes: {
                  shape: 'Sda'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                filters: {
                  shape: 'Sdc'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                searchIn: {
                  shape: 'Sdh'
                },
                searchText: {},
                sort: {
                  shape: 'Sdl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      assetListing: {
                        type: 'structure',
                        members: {
                          additionalAttributes: {
                            type: 'structure',
                            members: {
                              forms: {},
                              latestTimeSeriesDataPointForms: {
                                shape: 'S1x'
                              }
                            }
                          },
                          createdAt: {
                            type: 'timestamp'
                          },
                          description: {
                            shape: 'Sq'
                          },
                          entityId: {},
                          entityRevision: {},
                          entityType: {},
                          glossaryTerms: {
                            shape: 'Sw'
                          },
                          listingCreatedBy: {},
                          listingId: {},
                          listingRevision: {},
                          listingUpdatedBy: {},
                          name: {
                            shape: 'S1p'
                          },
                          owningProjectId: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                nextToken: {},
                totalMatchCount: {
                  type: 'integer'
                }
              }
            }
          },
          SearchTypes: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/types-search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'managed', 'searchScope'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                filters: {
                  shape: 'Sdc'
                },
                managed: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                searchIn: {
                  shape: 'Sdh'
                },
                searchScope: {},
                searchText: {},
                sort: {
                  shape: 'Sdl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      assetTypeItem: {
                        type: 'structure',
                        required: ['domainId', 'formsOutput', 'name', 'owningProjectId', 'revision'],
                        members: {
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          description: {
                            shape: 'Sq'
                          },
                          domainId: {},
                          formsOutput: {
                            shape: 'S2b'
                          },
                          name: {},
                          originDomainId: {},
                          originProjectId: {},
                          owningProjectId: {},
                          revision: {},
                          updatedAt: {
                            type: 'timestamp'
                          },
                          updatedBy: {}
                        }
                      },
                      formTypeItem: {
                        type: 'structure',
                        required: ['domainId', 'name', 'revision'],
                        members: {
                          createdAt: {
                            type: 'timestamp'
                          },
                          createdBy: {},
                          description: {
                            shape: 'Sq'
                          },
                          domainId: {},
                          imports: {
                            shape: 'S8u'
                          },
                          model: {
                            shape: 'S4x'
                          },
                          name: {
                            shape: 'S1w'
                          },
                          originDomainId: {},
                          originProjectId: {},
                          owningProjectId: {},
                          revision: {},
                          status: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                nextToken: {},
                totalMatchCount: {
                  type: 'integer'
                }
              }
            }
          },
          SearchUserProfiles: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/search-user-profiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'userType'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                searchText: {
                  type: 'string',
                  sensitive: true
                },
                userType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      details: {
                        shape: 'S6y'
                      },
                      domainId: {},
                      id: {},
                      status: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          StartDataSourceRun: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataSourceIdentifier', 'domainIdentifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                dataSourceIdentifier: {
                  location: 'uri',
                  locationName: 'dataSourceIdentifier'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'dataSourceId', 'domainId', 'id', 'projectId', 'status', 'type', 'updatedAt'],
              members: {
                createdAt: {
                  shape: 'S3f'
                },
                dataSourceConfigurationSnapshot: {},
                dataSourceId: {},
                domainId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                projectId: {},
                runStatisticsForAssets: {
                  shape: 'S8b'
                },
                startedAt: {
                  shape: 'S3f'
                },
                status: {},
                stoppedAt: {
                  shape: 'S3f'
                },
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            },
            idempotent: true
          },
          StartMetadataGenerationRun: {
            http: {
              requestUri: '/v2/domains/{domainIdentifier}/metadata-generation-runs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'owningProjectIdentifier', 'target', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                owningProjectIdentifier: {},
                target: {
                  shape: 'S9b'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                id: {},
                owningProjectId: {},
                status: {},
                type: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S3s'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateDataSource: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/data-sources/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                assetFormsInput: {
                  shape: 'S1i'
                },
                configuration: {
                  shape: 'S2e'
                },
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                enableSetting: {},
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {
                  shape: 'S2z'
                },
                publishOnImport: {
                  type: 'boolean'
                },
                recommendation: {
                  shape: 'S30'
                },
                schedule: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'environmentId', 'id', 'name', 'projectId'],
              members: {
                assetFormsOutput: {
                  shape: 'S1u'
                },
                configuration: {
                  shape: 'S36'
                },
                createdAt: {
                  shape: 'S3f'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                enableSetting: {},
                environmentId: {},
                errorMessage: {
                  shape: 'S3h'
                },
                id: {},
                lastRunAt: {
                  shape: 'S3f'
                },
                lastRunErrorMessage: {
                  shape: 'S3h'
                },
                lastRunStatus: {},
                name: {
                  shape: 'S2z'
                },
                projectId: {},
                publishOnImport: {
                  type: 'boolean'
                },
                recommendation: {
                  shape: 'S30'
                },
                schedule: {
                  shape: 'S31'
                },
                status: {},
                type: {},
                updatedAt: {
                  shape: 'S3f'
                }
              }
            },
            idempotent: true
          },
          UpdateDomain: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identifier'],
              members: {
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                description: {},
                domainExecutionRole: {},
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {},
                singleSignOn: {
                  shape: 'S3p'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id'],
              members: {
                description: {},
                domainExecutionRole: {},
                id: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                name: {},
                singleSignOn: {
                  shape: 'S3p'
                }
              }
            },
            idempotent: true
          },
          UpdateEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                description: {},
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentProfileId', 'name', 'projectId', 'provider'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                deploymentProperties: {
                  shape: 'S45'
                },
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentActions: {
                  shape: 'S48'
                },
                environmentBlueprintId: {},
                environmentProfileId: {},
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastDeployment: {
                  shape: 'S4e'
                },
                name: {
                  shape: 'S4k'
                },
                projectId: {},
                provider: {},
                provisionedResources: {
                  shape: 'S4l'
                },
                provisioningProperties: {
                  shape: 'S4n'
                },
                status: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          UpdateEnvironmentProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/environment-profiles/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                description: {},
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {
                  shape: 'S4u'
                },
                userParameters: {
                  shape: 'S3z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'environmentBlueprintId', 'id', 'name'],
              members: {
                awsAccountId: {},
                awsAccountRegion: {},
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                environmentBlueprintId: {},
                id: {},
                name: {
                  shape: 'S4u'
                },
                projectId: {},
                updatedAt: {
                  shape: 'S44'
                },
                userParameters: {
                  shape: 'S4q'
                }
              }
            }
          },
          UpdateGlossary: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/glossaries/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'S52'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {
                  shape: 'S53'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'id', 'name', 'owningProjectId'],
              members: {
                description: {
                  shape: 'S52'
                },
                domainId: {},
                id: {},
                name: {
                  shape: 'S53'
                },
                owningProjectId: {},
                status: {}
              }
            },
            idempotent: true
          },
          UpdateGlossaryTerm: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/glossary-terms/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                glossaryIdentifier: {},
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                longDescription: {
                  shape: 'S58'
                },
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                },
                status: {},
                termRelations: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainId', 'glossaryId', 'id', 'name', 'status'],
              members: {
                domainId: {},
                glossaryId: {},
                id: {},
                longDescription: {
                  shape: 'S58'
                },
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                },
                status: {},
                termRelations: {
                  shape: 'S5a'
                }
              }
            },
            idempotent: true
          },
          UpdateGroupProfile: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'groupIdentifier', 'status'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                groupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainId: {},
                groupName: {
                  shape: 'S5h'
                },
                id: {},
                status: {}
              }
            }
          },
          UpdateProject: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/projects/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier'],
              members: {
                description: {
                  shape: 'Sq'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                name: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdBy', 'domainId', 'id', 'name'],
              members: {
                createdAt: {
                  shape: 'S44'
                },
                createdBy: {},
                description: {
                  shape: 'Sq'
                },
                domainId: {},
                failureReasons: {
                  shape: 'S5r'
                },
                glossaryTerms: {
                  shape: 'S1n'
                },
                id: {},
                lastUpdatedAt: {
                  shape: 'S44'
                },
                name: {
                  shape: 'S15'
                },
                projectStatus: {}
              }
            },
            idempotent: true
          },
          UpdateSubscriptionGrantStatus: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assetIdentifier', 'domainIdentifier', 'identifier', 'status'],
              members: {
                assetIdentifier: {
                  location: 'uri',
                  locationName: 'assetIdentifier'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                failureCause: {
                  shape: 'S67'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                status: {},
                targetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'grantedEntity', 'id', 'status', 'subscriptionTargetId', 'updatedAt'],
              members: {
                assets: {
                  shape: 'S65'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                grantedEntity: {
                  shape: 'S69'
                },
                id: {},
                status: {},
                subscriptionId: {},
                subscriptionTargetId: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          UpdateSubscriptionRequest: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/subscription-requests/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'identifier', 'requestReason'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                requestReason: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'createdBy', 'domainId', 'id', 'requestReason', 'status', 'subscribedListings', 'subscribedPrincipals', 'updatedAt'],
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                decisionComment: {
                  shape: 'Sh'
                },
                domainId: {},
                id: {},
                requestReason: {
                  shape: 'Sm'
                },
                reviewerId: {},
                status: {},
                subscribedListings: {
                  type: 'list',
                  member: {
                    shape: 'Sp'
                  }
                },
                subscribedPrincipals: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          UpdateSubscriptionTarget: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'environmentIdentifier', 'identifier'],
              members: {
                applicableAssetTypes: {
                  shape: 'S6n'
                },
                authorizedPrincipals: {
                  shape: 'S6o'
                },
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                environmentIdentifier: {
                  location: 'uri',
                  locationName: 'environmentIdentifier'
                },
                identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                manageAccessRole: {},
                name: {
                  shape: 'S6q'
                },
                provider: {},
                subscriptionTargetConfig: {
                  shape: 'S6r'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicableAssetTypes', 'authorizedPrincipals', 'createdAt', 'createdBy', 'domainId', 'environmentId', 'id', 'manageAccessRole', 'name', 'projectId', 'provider', 'subscriptionTargetConfig', 'type'],
              members: {
                applicableAssetTypes: {
                  shape: 'S6n'
                },
                authorizedPrincipals: {
                  shape: 'S6o'
                },
                createdAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                domainId: {},
                environmentId: {},
                id: {},
                manageAccessRole: {},
                name: {
                  shape: 'S6q'
                },
                projectId: {},
                provider: {},
                subscriptionTargetConfig: {
                  shape: 'S6r'
                },
                type: {},
                updatedAt: {
                  type: 'timestamp'
                },
                updatedBy: {}
              }
            },
            idempotent: true
          },
          UpdateUserProfile: {
            http: {
              method: 'PUT',
              requestUri: '/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainIdentifier', 'status', 'userIdentifier'],
              members: {
                domainIdentifier: {
                  location: 'uri',
                  locationName: 'domainIdentifier'
                },
                status: {},
                type: {},
                userIdentifier: {
                  location: 'uri',
                  locationName: 'userIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S6y'
                },
                domainId: {},
                id: {},
                status: {},
                type: {}
              }
            }
          }
        },
        shapes: {
          Sh: {
            type: 'string',
            sensitive: true
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sp: {
            type: 'structure',
            required: ['description', 'id', 'item', 'name', 'ownerProjectId'],
            members: {
              description: {
                shape: 'Sq'
              },
              id: {},
              item: {
                type: 'structure',
                members: {
                  assetListing: {
                    type: 'structure',
                    members: {
                      entityId: {},
                      entityRevision: {},
                      entityType: {},
                      forms: {},
                      glossaryTerms: {
                        shape: 'Sw'
                      }
                    }
                  }
                },
                union: true
              },
              name: {},
              ownerProjectId: {},
              ownerProjectName: {},
              revision: {}
            }
          },
          Sq: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {
                  shape: 'Sy'
                },
                shortDescription: {
                  shape: 'Sz'
                }
              }
            }
          },
          Sy: {
            type: 'string',
            sensitive: true
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S13: {
            type: 'structure',
            members: {
              project: {
                type: 'structure',
                members: {
                  id: {},
                  name: {
                    shape: 'S15'
                  }
                }
              }
            },
            union: true
          },
          S15: {
            type: 'string',
            sensitive: true
          },
          S1h: {
            type: 'string',
            sensitive: true
          },
          S1i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['formName'],
              members: {
                content: {},
                formName: {},
                typeIdentifier: {},
                typeRevision: {}
              },
              sensitive: true
            },
            sensitive: true
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'string',
            sensitive: true
          },
          S1q: {
            type: 'structure',
            members: {
              businessNameGeneration: {
                type: 'structure',
                members: {
                  enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['formName'],
              members: {
                content: {},
                formName: {},
                typeName: {
                  shape: 'S1w'
                },
                typeRevision: {}
              }
            }
          },
          S1w: {
            type: 'string',
            sensitive: true
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['formName', 'timestamp', 'typeIdentifier'],
              members: {
                contentSummary: {},
                formName: {},
                id: {},
                timestamp: {
                  type: 'timestamp'
                },
                typeIdentifier: {},
                typeRevision: {}
              }
            }
          },
          S23: {
            type: 'structure',
            required: ['listingId', 'listingStatus'],
            members: {
              listingId: {},
              listingStatus: {}
            }
          },
          S2b: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['typeName', 'typeRevision'],
              members: {
                required: {
                  type: 'boolean'
                },
                typeName: {
                  shape: 'S1w'
                },
                typeRevision: {}
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              glueRunConfiguration: {
                type: 'structure',
                required: ['relationalFilterConfigurations'],
                members: {
                  autoImportDataQualityResult: {
                    type: 'boolean'
                  },
                  dataAccessRole: {},
                  relationalFilterConfigurations: {
                    shape: 'S2h'
                  }
                }
              },
              redshiftRunConfiguration: {
                type: 'structure',
                required: ['redshiftCredentialConfiguration', 'redshiftStorage', 'relationalFilterConfigurations'],
                members: {
                  dataAccessRole: {},
                  redshiftCredentialConfiguration: {
                    shape: 'S2r'
                  },
                  redshiftStorage: {
                    shape: 'S2t'
                  },
                  relationalFilterConfigurations: {
                    shape: 'S2h'
                  }
                }
              }
            },
            union: true
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['databaseName'],
              members: {
                databaseName: {},
                filterExpressions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['expression', 'type'],
                    members: {
                      expression: {},
                      type: {}
                    }
                  }
                },
                schemaName: {}
              }
            }
          },
          S2r: {
            type: 'structure',
            required: ['secretManagerArn'],
            members: {
              secretManagerArn: {}
            }
          },
          S2t: {
            type: 'structure',
            members: {
              redshiftClusterSource: {
                type: 'structure',
                required: ['clusterName'],
                members: {
                  clusterName: {}
                }
              },
              redshiftServerlessSource: {
                type: 'structure',
                required: ['workgroupName'],
                members: {
                  workgroupName: {}
                }
              }
            },
            union: true
          },
          S2z: {
            type: 'string',
            sensitive: true
          },
          S30: {
            type: 'structure',
            members: {
              enableBusinessNameGeneration: {
                type: 'boolean'
              }
            }
          },
          S31: {
            type: 'structure',
            members: {
              schedule: {},
              timezone: {}
            },
            sensitive: true
          },
          S36: {
            type: 'structure',
            members: {
              glueRunConfiguration: {
                type: 'structure',
                required: ['relationalFilterConfigurations'],
                members: {
                  accountId: {},
                  autoImportDataQualityResult: {
                    type: 'boolean'
                  },
                  dataAccessRole: {},
                  region: {},
                  relationalFilterConfigurations: {
                    shape: 'S2h'
                  }
                }
              },
              redshiftRunConfiguration: {
                type: 'structure',
                required: ['redshiftCredentialConfiguration', 'redshiftStorage', 'relationalFilterConfigurations'],
                members: {
                  accountId: {},
                  dataAccessRole: {},
                  redshiftCredentialConfiguration: {
                    shape: 'S2r'
                  },
                  redshiftStorage: {
                    shape: 'S2t'
                  },
                  region: {},
                  relationalFilterConfigurations: {
                    shape: 'S2h'
                  }
                }
              }
            },
            union: true
          },
          S3f: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S3h: {
            type: 'structure',
            required: ['errorType'],
            members: {
              errorDetail: {},
              errorType: {}
            }
          },
          S3p: {
            type: 'structure',
            members: {
              type: {},
              userAssignment: {}
            }
          },
          S3s: {
            type: 'map',
            key: {},
            value: {}
          },
          S3z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            }
          },
          S44: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S45: {
            type: 'structure',
            members: {
              endTimeoutMinutes: {
                type: 'integer'
              },
              startTimeoutMinutes: {
                type: 'integer'
              }
            }
          },
          S48: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['parameters', 'type'],
              members: {
                auth: {},
                parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      key: {},
                      value: {}
                    }
                  }
                },
                type: {}
              }
            }
          },
          S4e: {
            type: 'structure',
            members: {
              deploymentId: {},
              deploymentStatus: {},
              deploymentType: {},
              failureReason: {
                type: 'structure',
                required: ['message'],
                members: {
                  code: {},
                  message: {}
                }
              },
              isDeploymentComplete: {
                type: 'boolean'
              },
              messages: {
                type: 'list',
                member: {}
              }
            }
          },
          S4k: {
            type: 'string',
            sensitive: true
          },
          S4l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type', 'value'],
              members: {
                name: {},
                provider: {},
                type: {},
                value: {}
              }
            }
          },
          S4n: {
            type: 'structure',
            members: {
              cloudFormation: {
                type: 'structure',
                required: ['templateUrl'],
                members: {
                  templateUrl: {}
                }
              }
            },
            union: true
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['fieldType', 'keyName'],
              members: {
                defaultValue: {},
                description: {
                  shape: 'Sq'
                },
                fieldType: {},
                isEditable: {
                  type: 'boolean'
                },
                isOptional: {
                  type: 'boolean'
                },
                keyName: {}
              }
            }
          },
          S4u: {
            type: 'string',
            sensitive: true
          },
          S4x: {
            type: 'structure',
            members: {
              smithy: {}
            },
            sensitive: true,
            union: true
          },
          S52: {
            type: 'string',
            sensitive: true
          },
          S53: {
            type: 'string',
            sensitive: true
          },
          S58: {
            type: 'string',
            sensitive: true
          },
          S5a: {
            type: 'structure',
            members: {
              classifies: {
                type: 'list',
                member: {}
              },
              isA: {
                type: 'list',
                member: {}
              }
            }
          },
          S5h: {
            type: 'string',
            sensitive: true
          },
          S5r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                code: {},
                message: {}
              }
            }
          },
          S5w: {
            type: 'structure',
            members: {
              groupIdentifier: {},
              userIdentifier: {}
            },
            union: true
          },
          S65: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['assetId', 'assetRevision', 'status'],
              members: {
                assetId: {},
                assetRevision: {},
                failureCause: {
                  shape: 'S67'
                },
                failureTimestamp: {
                  type: 'timestamp'
                },
                grantedTimestamp: {
                  type: 'timestamp'
                },
                status: {},
                targetName: {}
              }
            }
          },
          S67: {
            type: 'structure',
            members: {
              message: {}
            }
          },
          S69: {
            type: 'structure',
            members: {
              listing: {
                type: 'structure',
                required: ['id', 'revision'],
                members: {
                  id: {},
                  revision: {}
                }
              }
            },
            union: true
          },
          S6n: {
            type: 'list',
            member: {}
          },
          S6o: {
            type: 'list',
            member: {}
          },
          S6q: {
            type: 'string',
            sensitive: true
          },
          S6r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['content', 'formName'],
              members: {
                content: {},
                formName: {}
              }
            }
          },
          S6y: {
            type: 'structure',
            members: {
              iam: {
                type: 'structure',
                members: {
                  arn: {}
                }
              },
              sso: {
                type: 'structure',
                members: {
                  firstName: {
                    type: 'string',
                    sensitive: true
                  },
                  lastName: {
                    type: 'string',
                    sensitive: true
                  },
                  username: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            },
            union: true
          },
          S8b: {
            type: 'structure',
            members: {
              added: {
                type: 'integer'
              },
              failed: {
                type: 'integer'
              },
              skipped: {
                type: 'integer'
              },
              unchanged: {
                type: 'integer'
              },
              updated: {
                type: 'integer'
              }
            }
          },
          S8m: {
            type: 'list',
            member: {}
          },
          S8o: {
            type: 'map',
            key: {},
            value: {
              type: 'map',
              key: {},
              value: {}
            }
          },
          S8u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'revision'],
              members: {
                name: {
                  shape: 'S1w'
                },
                revision: {}
              }
            }
          },
          S9b: {
            type: 'structure',
            required: ['identifier', 'type'],
            members: {
              identifier: {},
              revision: {},
              type: {}
            }
          },
          S9u: {
            type: 'structure',
            required: ['formName', 'timestamp', 'typeIdentifier'],
            members: {
              content: {},
              formName: {},
              id: {},
              timestamp: {
                type: 'timestamp'
              },
              typeIdentifier: {},
              typeRevision: {}
            }
          },
          Sda: {
            type: 'list',
            member: {}
          },
          Sdc: {
            type: 'structure',
            members: {
              and: {
                shape: 'Sdd'
              },
              filter: {
                type: 'structure',
                required: ['attribute', 'value'],
                members: {
                  attribute: {},
                  value: {}
                }
              },
              or: {
                shape: 'Sdd'
              }
            },
            union: true
          },
          Sdd: {
            type: 'list',
            member: {
              shape: 'Sdc'
            }
          },
          Sdh: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['attribute'],
              members: {
                attribute: {}
              }
            }
          },
          Sdl: {
            type: 'structure',
            required: ['attribute'],
            members: {
              attribute: {},
              order: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c8984e86fc4948f77d66c3ae27dd0ff55f0db6d7.js.map