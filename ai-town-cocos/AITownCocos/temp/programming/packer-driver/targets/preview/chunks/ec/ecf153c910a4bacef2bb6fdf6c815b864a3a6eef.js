System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-11-01',
          endpointPrefix: 'eks',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'Amazon EKS',
          serviceFullName: 'Amazon Elastic Kubernetes Service',
          serviceId: 'EKS',
          signatureVersion: 'v4',
          signingName: 'eks',
          uid: 'eks-2017-11-01'
        },
        operations: {
          AssociateAccessPolicy: {
            http: {
              requestUri: '/clusters/{name}/access-entries/{principalArn}/access-policies'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn', 'policyArn', 'accessScope'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
                },
                policyArn: {},
                accessScope: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clusterName: {},
                principalArn: {},
                associatedAccessPolicy: {
                  shape: 'S7'
                }
              }
            }
          },
          AssociateEncryptionConfig: {
            http: {
              requestUri: '/clusters/{name}/encryption-config/associate'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'encryptionConfig'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                encryptionConfig: {
                  shape: 'Sa'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          AssociateIdentityProviderConfig: {
            http: {
              requestUri: '/clusters/{name}/identity-provider-configs/associate'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'oidc'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                oidc: {
                  type: 'structure',
                  required: ['identityProviderConfigName', 'issuerUrl', 'clientId'],
                  members: {
                    identityProviderConfigName: {},
                    issuerUrl: {},
                    clientId: {},
                    usernameClaim: {},
                    usernamePrefix: {},
                    groupsClaim: {},
                    groupsPrefix: {},
                    requiredClaims: {
                      shape: 'Sp'
                    }
                  }
                },
                tags: {
                  shape: 'Ss'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                },
                tags: {
                  shape: 'Ss'
                }
              }
            }
          },
          CreateAccessEntry: {
            http: {
              requestUri: '/clusters/{name}/access-entries'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {},
                kubernetesGroups: {
                  shape: 'S5'
                },
                tags: {
                  shape: 'Ss'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                username: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessEntry: {
                  shape: 'Sy'
                }
              }
            }
          },
          CreateAddon: {
            http: {
              requestUri: '/clusters/{name}/addons'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'addonName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                addonName: {},
                addonVersion: {},
                serviceAccountRoleArn: {},
                resolveConflicts: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                },
                configurationValues: {},
                podIdentityAssociations: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                addon: {
                  shape: 'S16'
                }
              }
            }
          },
          CreateCluster: {
            http: {
              requestUri: '/clusters'
            },
            input: {
              type: 'structure',
              required: ['name', 'roleArn', 'resourcesVpcConfig'],
              members: {
                name: {},
                version: {},
                roleArn: {},
                resourcesVpcConfig: {
                  shape: 'S1e'
                },
                kubernetesNetworkConfig: {
                  type: 'structure',
                  members: {
                    serviceIpv4Cidr: {},
                    ipFamily: {}
                  }
                },
                logging: {
                  shape: 'S1i'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                },
                encryptionConfig: {
                  shape: 'Sa'
                },
                outpostConfig: {
                  type: 'structure',
                  required: ['outpostArns', 'controlPlaneInstanceType'],
                  members: {
                    outpostArns: {
                      shape: 'S5'
                    },
                    controlPlaneInstanceType: {},
                    controlPlanePlacement: {
                      type: 'structure',
                      members: {
                        groupName: {}
                      }
                    }
                  }
                },
                accessConfig: {
                  type: 'structure',
                  members: {
                    bootstrapClusterCreatorAdminPermissions: {
                      type: 'boolean'
                    },
                    authenticationMode: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'S1s'
                }
              }
            }
          },
          CreateEksAnywhereSubscription: {
            http: {
              requestUri: '/eks-anywhere-subscriptions'
            },
            input: {
              type: 'structure',
              required: ['name', 'term'],
              members: {
                name: {},
                term: {
                  shape: 'S2a'
                },
                licenseQuantity: {
                  type: 'integer'
                },
                licenseType: {},
                autoRenew: {
                  type: 'boolean'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscription: {
                  shape: 'S2f'
                }
              }
            }
          },
          CreateFargateProfile: {
            http: {
              requestUri: '/clusters/{name}/fargate-profiles'
            },
            input: {
              type: 'structure',
              required: ['fargateProfileName', 'clusterName', 'podExecutionRoleArn'],
              members: {
                fargateProfileName: {},
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                podExecutionRoleArn: {},
                subnets: {
                  shape: 'S5'
                },
                selectors: {
                  shape: 'S2h'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fargateProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          CreateNodegroup: {
            http: {
              requestUri: '/clusters/{name}/node-groups'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodegroupName', 'subnets', 'nodeRole'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {},
                scalingConfig: {
                  shape: 'S2o'
                },
                diskSize: {
                  type: 'integer'
                },
                subnets: {
                  shape: 'S5'
                },
                instanceTypes: {
                  shape: 'S5'
                },
                amiType: {},
                remoteAccess: {
                  shape: 'S2t'
                },
                nodeRole: {},
                labels: {
                  shape: 'S2u'
                },
                taints: {
                  shape: 'S2x'
                },
                tags: {
                  shape: 'Ss'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                launchTemplate: {
                  shape: 'S32'
                },
                updateConfig: {
                  shape: 'S33'
                },
                capacityType: {},
                version: {},
                releaseVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nodegroup: {
                  shape: 'S38'
                }
              }
            }
          },
          CreatePodIdentityAssociation: {
            http: {
              requestUri: '/clusters/{name}/pod-identity-associations'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'namespace', 'serviceAccount', 'roleArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                namespace: {},
                serviceAccount: {},
                roleArn: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                association: {
                  shape: 'S3j'
                }
              }
            }
          },
          DeleteAccessEntry: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/access-entries/{principalArn}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAddon: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/addons/{addonName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'addonName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                addonName: {
                  location: 'uri',
                  locationName: 'addonName'
                },
                preserve: {
                  location: 'querystring',
                  locationName: 'preserve',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                addon: {
                  shape: 'S16'
                }
              }
            }
          },
          DeleteCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'S1s'
                }
              }
            }
          },
          DeleteEksAnywhereSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/eks-anywhere-subscriptions/{id}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscription: {
                  shape: 'S2f'
                }
              }
            }
          },
          DeleteFargateProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/fargate-profiles/{fargateProfileName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'fargateProfileName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                fargateProfileName: {
                  location: 'uri',
                  locationName: 'fargateProfileName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fargateProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          DeleteNodegroup: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/node-groups/{nodegroupName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodegroupName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {
                  location: 'uri',
                  locationName: 'nodegroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nodegroup: {
                  shape: 'S38'
                }
              }
            }
          },
          DeletePodIdentityAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/pod-identity-associations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'associationId'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                association: {
                  shape: 'S3j'
                }
              }
            }
          },
          DeregisterCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/cluster-registrations/{name}'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'S1s'
                }
              }
            }
          },
          DescribeAccessEntry: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/access-entries/{principalArn}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accessEntry: {
                  shape: 'Sy'
                }
              }
            }
          },
          DescribeAddon: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/addons/{addonName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'addonName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                addonName: {
                  location: 'uri',
                  locationName: 'addonName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                addon: {
                  shape: 'S16'
                }
              }
            }
          },
          DescribeAddonConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/addons/configuration-schemas'
            },
            input: {
              type: 'structure',
              required: ['addonName', 'addonVersion'],
              members: {
                addonName: {
                  location: 'querystring',
                  locationName: 'addonName'
                },
                addonVersion: {
                  location: 'querystring',
                  locationName: 'addonVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                addonName: {},
                addonVersion: {},
                configurationSchema: {},
                podIdentityConfiguration: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      serviceAccount: {},
                      recommendedManagedPolicies: {
                        shape: 'S5'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeAddonVersions: {
            http: {
              method: 'GET',
              requestUri: '/addons/supported-versions'
            },
            input: {
              type: 'structure',
              members: {
                kubernetesVersion: {
                  location: 'querystring',
                  locationName: 'kubernetesVersion'
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
                addonName: {
                  location: 'querystring',
                  locationName: 'addonName'
                },
                types: {
                  shape: 'S5',
                  location: 'querystring',
                  locationName: 'types'
                },
                publishers: {
                  shape: 'S5',
                  location: 'querystring',
                  locationName: 'publishers'
                },
                owners: {
                  shape: 'S5',
                  location: 'querystring',
                  locationName: 'owners'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                addons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      addonName: {},
                      type: {},
                      addonVersions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            addonVersion: {},
                            architecture: {
                              shape: 'S5'
                            },
                            compatibilities: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  clusterVersion: {},
                                  platformVersions: {
                                    shape: 'S5'
                                  },
                                  defaultVersion: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            requiresConfiguration: {
                              type: 'boolean'
                            },
                            requiresIamPermissions: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      publisher: {},
                      owner: {},
                      marketplaceInformation: {
                        shape: 'S1c'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeCluster: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'S1s'
                }
              }
            }
          },
          DescribeEksAnywhereSubscription: {
            http: {
              method: 'GET',
              requestUri: '/eks-anywhere-subscriptions/{id}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscription: {
                  shape: 'S2f'
                }
              }
            }
          },
          DescribeFargateProfile: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/fargate-profiles/{fargateProfileName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'fargateProfileName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                fargateProfileName: {
                  location: 'uri',
                  locationName: 'fargateProfileName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fargateProfile: {
                  shape: 'S2l'
                }
              }
            }
          },
          DescribeIdentityProviderConfig: {
            http: {
              requestUri: '/clusters/{name}/identity-provider-configs/describe'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'identityProviderConfig'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                identityProviderConfig: {
                  shape: 'S4o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                identityProviderConfig: {
                  type: 'structure',
                  members: {
                    oidc: {
                      type: 'structure',
                      members: {
                        identityProviderConfigName: {},
                        identityProviderConfigArn: {},
                        clusterName: {},
                        issuerUrl: {},
                        clientId: {},
                        usernameClaim: {},
                        usernamePrefix: {},
                        groupsClaim: {},
                        groupsPrefix: {},
                        requiredClaims: {
                          shape: 'Sp'
                        },
                        tags: {
                          shape: 'Ss'
                        },
                        status: {}
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeInsight: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/insights/{id}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'id'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                insight: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    category: {},
                    kubernetesVersion: {},
                    lastRefreshTime: {
                      type: 'timestamp'
                    },
                    lastTransitionTime: {
                      type: 'timestamp'
                    },
                    description: {},
                    insightStatus: {
                      shape: 'S4x'
                    },
                    recommendation: {},
                    additionalInfo: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    resources: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          insightStatus: {
                            shape: 'S4x'
                          },
                          kubernetesResourceUri: {},
                          arn: {}
                        }
                      }
                    },
                    categorySpecificSummary: {
                      type: 'structure',
                      members: {
                        deprecationDetails: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              usage: {},
                              replacedWith: {},
                              stopServingVersion: {},
                              startServingReplacementVersion: {},
                              clientStats: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    userAgent: {},
                                    numberOfRequestsLast30Days: {
                                      type: 'integer'
                                    },
                                    lastRequestTime: {
                                      type: 'timestamp'
                                    }
                                  }
                                }
                              }
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
          DescribeNodegroup: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/node-groups/{nodegroupName}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodegroupName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {
                  location: 'uri',
                  locationName: 'nodegroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nodegroup: {
                  shape: 'S38'
                }
              }
            }
          },
          DescribePodIdentityAssociation: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/pod-identity-associations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'associationId'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                association: {
                  shape: 'S3j'
                }
              }
            }
          },
          DescribeUpdate: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/updates/{updateId}'
            },
            input: {
              type: 'structure',
              required: ['name', 'updateId'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                updateId: {
                  location: 'uri',
                  locationName: 'updateId'
                },
                nodegroupName: {
                  location: 'querystring',
                  locationName: 'nodegroupName'
                },
                addonName: {
                  location: 'querystring',
                  locationName: 'addonName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          DisassociateAccessPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/clusters/{name}/access-entries/{principalArn}/access-policies/{policyArn}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn', 'policyArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
                },
                policyArn: {
                  location: 'uri',
                  locationName: 'policyArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateIdentityProviderConfig: {
            http: {
              requestUri: '/clusters/{name}/identity-provider-configs/disassociate'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'identityProviderConfig'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                identityProviderConfig: {
                  shape: 'S4o'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          ListAccessEntries: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/access-entries'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                associatedPolicyArn: {
                  location: 'querystring',
                  locationName: 'associatedPolicyArn'
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
                accessEntries: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          ListAccessPolicies: {
            http: {
              method: 'GET',
              requestUri: '/access-policies'
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accessPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAddons: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/addons'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
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
                addons: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          ListAssociatedAccessPolicies: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/access-entries/{principalArn}/access-policies'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
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
                clusterName: {},
                principalArn: {},
                nextToken: {},
                associatedAccessPolicies: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            }
          },
          ListClusters: {
            http: {
              method: 'GET',
              requestUri: '/clusters'
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
                include: {
                  location: 'querystring',
                  locationName: 'include',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clusters: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          ListEksAnywhereSubscriptions: {
            http: {
              method: 'GET',
              requestUri: '/eks-anywhere-subscriptions'
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
                includeStatus: {
                  location: 'querystring',
                  locationName: 'includeStatus',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriptions: {
                  type: 'list',
                  member: {
                    shape: 'S2f'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFargateProfiles: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/fargate-profiles'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
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
                fargateProfileNames: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          ListIdentityProviderConfigs: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/identity-provider-configs'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
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
                identityProviderConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S4o'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInsights: {
            http: {
              requestUri: '/clusters/{name}/insights'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                filter: {
                  type: 'structure',
                  members: {
                    categories: {
                      type: 'list',
                      member: {}
                    },
                    kubernetesVersions: {
                      shape: 'S5'
                    },
                    statuses: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                insights: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      category: {},
                      kubernetesVersion: {},
                      lastRefreshTime: {
                        type: 'timestamp'
                      },
                      lastTransitionTime: {
                        type: 'timestamp'
                      },
                      description: {},
                      insightStatus: {
                        shape: 'S4x'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNodegroups: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/node-groups'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
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
                nodegroups: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          ListPodIdentityAssociations: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/pod-identity-associations'
            },
            input: {
              type: 'structure',
              required: ['clusterName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                serviceAccount: {
                  location: 'querystring',
                  locationName: 'serviceAccount'
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
                associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      clusterName: {},
                      namespace: {},
                      serviceAccount: {},
                      associationArn: {},
                      associationId: {},
                      ownerArn: {}
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
                  shape: 'Ss'
                }
              }
            }
          },
          ListUpdates: {
            http: {
              method: 'GET',
              requestUri: '/clusters/{name}/updates'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {
                  location: 'querystring',
                  locationName: 'nodegroupName'
                },
                addonName: {
                  location: 'querystring',
                  locationName: 'addonName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                updateIds: {
                  shape: 'S5'
                },
                nextToken: {}
              }
            }
          },
          RegisterCluster: {
            http: {
              requestUri: '/cluster-registrations'
            },
            input: {
              type: 'structure',
              required: ['name', 'connectorConfig'],
              members: {
                name: {},
                connectorConfig: {
                  type: 'structure',
                  required: ['roleArn', 'provider'],
                  members: {
                    roleArn: {},
                    provider: {}
                  }
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cluster: {
                  shape: 'S1s'
                }
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
                  shape: 'Ss'
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
          },
          UpdateAccessEntry: {
            http: {
              requestUri: '/clusters/{name}/access-entries/{principalArn}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'principalArn'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                principalArn: {
                  location: 'uri',
                  locationName: 'principalArn'
                },
                kubernetesGroups: {
                  shape: 'S5'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                username: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessEntry: {
                  shape: 'Sy'
                }
              }
            }
          },
          UpdateAddon: {
            http: {
              requestUri: '/clusters/{name}/addons/{addonName}/update'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'addonName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                addonName: {
                  location: 'uri',
                  locationName: 'addonName'
                },
                addonVersion: {},
                serviceAccountRoleArn: {},
                resolveConflicts: {},
                clientRequestToken: {
                  idempotencyToken: true
                },
                configurationValues: {},
                podIdentityAssociations: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdateClusterConfig: {
            http: {
              requestUri: '/clusters/{name}/update-config'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                resourcesVpcConfig: {
                  shape: 'S1e'
                },
                logging: {
                  shape: 'S1i'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                accessConfig: {
                  type: 'structure',
                  members: {
                    authenticationMode: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdateClusterVersion: {
            http: {
              requestUri: '/clusters/{name}/updates'
            },
            input: {
              type: 'structure',
              required: ['name', 'version'],
              members: {
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                version: {},
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdateEksAnywhereSubscription: {
            http: {
              requestUri: '/eks-anywhere-subscriptions/{id}'
            },
            input: {
              type: 'structure',
              required: ['id', 'autoRenew'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                autoRenew: {
                  type: 'boolean'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscription: {
                  shape: 'S2f'
                }
              }
            }
          },
          UpdateNodegroupConfig: {
            http: {
              requestUri: '/clusters/{name}/node-groups/{nodegroupName}/update-config'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodegroupName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {
                  location: 'uri',
                  locationName: 'nodegroupName'
                },
                labels: {
                  type: 'structure',
                  members: {
                    addOrUpdateLabels: {
                      shape: 'S2u'
                    },
                    removeLabels: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                taints: {
                  type: 'structure',
                  members: {
                    addOrUpdateTaints: {
                      shape: 'S2x'
                    },
                    removeTaints: {
                      shape: 'S2x'
                    }
                  }
                },
                scalingConfig: {
                  shape: 'S2o'
                },
                updateConfig: {
                  shape: 'S33'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdateNodegroupVersion: {
            http: {
              requestUri: '/clusters/{name}/node-groups/{nodegroupName}/update-version'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'nodegroupName'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                nodegroupName: {
                  location: 'uri',
                  locationName: 'nodegroupName'
                },
                version: {},
                releaseVersion: {},
                launchTemplate: {
                  shape: 'S32'
                },
                force: {
                  type: 'boolean'
                },
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                update: {
                  shape: 'Se'
                }
              }
            }
          },
          UpdatePodIdentityAssociation: {
            http: {
              requestUri: '/clusters/{name}/pod-identity-associations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'associationId'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'name'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                },
                roleArn: {},
                clientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                association: {
                  shape: 'S3j'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              type: {},
              namespaces: {
                shape: 'S5'
              }
            }
          },
          S5: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'structure',
            members: {
              policyArn: {},
              accessScope: {
                shape: 'S3'
              },
              associatedAt: {
                type: 'timestamp'
              },
              modifiedAt: {
                type: 'timestamp'
              }
            }
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                resources: {
                  shape: 'S5'
                },
                provider: {
                  type: 'structure',
                  members: {
                    keyArn: {}
                  }
                }
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              id: {},
              status: {},
              type: {},
              params: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    type: {},
                    value: {}
                  }
                }
              },
              createdAt: {
                type: 'timestamp'
              },
              errors: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    errorCode: {},
                    errorMessage: {},
                    resourceIds: {
                      shape: 'S5'
                    }
                  }
                }
              }
            }
          },
          Sp: {
            type: 'map',
            key: {},
            value: {}
          },
          Ss: {
            type: 'map',
            key: {},
            value: {}
          },
          Sy: {
            type: 'structure',
            members: {
              clusterName: {},
              principalArn: {},
              kubernetesGroups: {
                shape: 'S5'
              },
              accessEntryArn: {},
              createdAt: {
                type: 'timestamp'
              },
              modifiedAt: {
                type: 'timestamp'
              },
              tags: {
                shape: 'Ss'
              },
              username: {},
              type: {}
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['serviceAccount', 'roleArn'],
              members: {
                serviceAccount: {},
                roleArn: {}
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              addonName: {},
              clusterName: {},
              status: {},
              addonVersion: {},
              health: {
                type: 'structure',
                members: {
                  issues: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        code: {},
                        message: {},
                        resourceIds: {
                          shape: 'S5'
                        }
                      }
                    }
                  }
                }
              },
              addonArn: {},
              createdAt: {
                type: 'timestamp'
              },
              modifiedAt: {
                type: 'timestamp'
              },
              serviceAccountRoleArn: {},
              tags: {
                shape: 'Ss'
              },
              publisher: {},
              owner: {},
              marketplaceInformation: {
                shape: 'S1c'
              },
              configurationValues: {},
              podIdentityAssociations: {
                shape: 'S5'
              }
            }
          },
          S1c: {
            type: 'structure',
            members: {
              productId: {},
              productUrl: {}
            }
          },
          S1e: {
            type: 'structure',
            members: {
              subnetIds: {
                shape: 'S5'
              },
              securityGroupIds: {
                shape: 'S5'
              },
              endpointPublicAccess: {
                type: 'boolean'
              },
              endpointPrivateAccess: {
                type: 'boolean'
              },
              publicAccessCidrs: {
                shape: 'S5'
              }
            }
          },
          S1i: {
            type: 'structure',
            members: {
              clusterLogging: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    types: {
                      type: 'list',
                      member: {}
                    },
                    enabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S1s: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              version: {},
              endpoint: {},
              roleArn: {},
              resourcesVpcConfig: {
                type: 'structure',
                members: {
                  subnetIds: {
                    shape: 'S5'
                  },
                  securityGroupIds: {
                    shape: 'S5'
                  },
                  clusterSecurityGroupId: {},
                  vpcId: {},
                  endpointPublicAccess: {
                    type: 'boolean'
                  },
                  endpointPrivateAccess: {
                    type: 'boolean'
                  },
                  publicAccessCidrs: {
                    shape: 'S5'
                  }
                }
              },
              kubernetesNetworkConfig: {
                type: 'structure',
                members: {
                  serviceIpv4Cidr: {},
                  serviceIpv6Cidr: {},
                  ipFamily: {}
                }
              },
              logging: {
                shape: 'S1i'
              },
              identity: {
                type: 'structure',
                members: {
                  oidc: {
                    type: 'structure',
                    members: {
                      issuer: {}
                    }
                  }
                }
              },
              status: {},
              certificateAuthority: {
                type: 'structure',
                members: {
                  data: {}
                }
              },
              clientRequestToken: {},
              platformVersion: {},
              tags: {
                shape: 'Ss'
              },
              encryptionConfig: {
                shape: 'Sa'
              },
              connectorConfig: {
                type: 'structure',
                members: {
                  activationId: {},
                  activationCode: {},
                  activationExpiry: {
                    type: 'timestamp'
                  },
                  provider: {},
                  roleArn: {}
                }
              },
              id: {},
              health: {
                type: 'structure',
                members: {
                  issues: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        code: {},
                        message: {},
                        resourceIds: {
                          shape: 'S5'
                        }
                      }
                    }
                  }
                }
              },
              outpostConfig: {
                type: 'structure',
                required: ['outpostArns', 'controlPlaneInstanceType'],
                members: {
                  outpostArns: {
                    shape: 'S5'
                  },
                  controlPlaneInstanceType: {},
                  controlPlanePlacement: {
                    type: 'structure',
                    members: {
                      groupName: {}
                    }
                  }
                }
              },
              accessConfig: {
                type: 'structure',
                members: {
                  bootstrapClusterCreatorAdminPermissions: {
                    type: 'boolean'
                  },
                  authenticationMode: {}
                }
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              duration: {
                type: 'integer'
              },
              unit: {}
            }
          },
          S2f: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              createdAt: {
                type: 'timestamp'
              },
              effectiveDate: {
                type: 'timestamp'
              },
              expirationDate: {
                type: 'timestamp'
              },
              licenseQuantity: {
                type: 'integer'
              },
              licenseType: {},
              term: {
                shape: 'S2a'
              },
              status: {},
              autoRenew: {
                type: 'boolean'
              },
              licenseArns: {
                shape: 'S5'
              },
              tags: {
                shape: 'Ss'
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                namespace: {},
                labels: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              fargateProfileName: {},
              fargateProfileArn: {},
              clusterName: {},
              createdAt: {
                type: 'timestamp'
              },
              podExecutionRoleArn: {},
              subnets: {
                shape: 'S5'
              },
              selectors: {
                shape: 'S2h'
              },
              status: {},
              tags: {
                shape: 'Ss'
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              minSize: {
                type: 'integer'
              },
              maxSize: {
                type: 'integer'
              },
              desiredSize: {
                type: 'integer'
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              ec2SshKey: {},
              sourceSecurityGroups: {
                shape: 'S5'
              }
            }
          },
          S2u: {
            type: 'map',
            key: {},
            value: {}
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {},
                effect: {}
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              name: {},
              version: {},
              id: {}
            }
          },
          S33: {
            type: 'structure',
            members: {
              maxUnavailable: {
                type: 'integer'
              },
              maxUnavailablePercentage: {
                type: 'integer'
              }
            }
          },
          S38: {
            type: 'structure',
            members: {
              nodegroupName: {},
              nodegroupArn: {},
              clusterName: {},
              version: {},
              releaseVersion: {},
              createdAt: {
                type: 'timestamp'
              },
              modifiedAt: {
                type: 'timestamp'
              },
              status: {},
              capacityType: {},
              scalingConfig: {
                shape: 'S2o'
              },
              instanceTypes: {
                shape: 'S5'
              },
              subnets: {
                shape: 'S5'
              },
              remoteAccess: {
                shape: 'S2t'
              },
              amiType: {},
              nodeRole: {},
              labels: {
                shape: 'S2u'
              },
              taints: {
                shape: 'S2x'
              },
              resources: {
                type: 'structure',
                members: {
                  autoScalingGroups: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        name: {}
                      }
                    }
                  },
                  remoteAccessSecurityGroup: {}
                }
              },
              diskSize: {
                type: 'integer'
              },
              health: {
                type: 'structure',
                members: {
                  issues: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        code: {},
                        message: {},
                        resourceIds: {
                          shape: 'S5'
                        }
                      }
                    }
                  }
                }
              },
              updateConfig: {
                shape: 'S33'
              },
              launchTemplate: {
                shape: 'S32'
              },
              tags: {
                shape: 'Ss'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              clusterName: {},
              namespace: {},
              serviceAccount: {},
              roleArn: {},
              associationArn: {},
              associationId: {},
              tags: {
                shape: 'Ss'
              },
              createdAt: {
                type: 'timestamp'
              },
              modifiedAt: {
                type: 'timestamp'
              },
              ownerArn: {}
            }
          },
          S4o: {
            type: 'structure',
            required: ['type', 'name'],
            members: {
              type: {},
              name: {}
            }
          },
          S4x: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ecf153c910a4bacef2bb6fdf6c815b864a3a6eef.js.map