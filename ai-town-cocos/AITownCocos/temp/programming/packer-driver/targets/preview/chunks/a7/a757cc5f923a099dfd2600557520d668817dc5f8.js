System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-11-01',
          endpointPrefix: 'aoss',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'OpenSearch Service Serverless',
          serviceId: 'OpenSearchServerless',
          signatureVersion: 'v4',
          signingName: 'aoss',
          targetPrefix: 'OpenSearchServerless',
          uid: 'opensearchserverless-2021-11-01'
        },
        operations: {
          BatchGetCollection: {
            input: {
              type: 'structure',
              members: {
                ids: {
                  type: 'list',
                  member: {}
                },
                names: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                collectionDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      collectionEndpoint: {},
                      createdDate: {
                        type: 'long'
                      },
                      dashboardEndpoint: {},
                      description: {},
                      id: {},
                      kmsKeyArn: {},
                      lastModifiedDate: {
                        type: 'long'
                      },
                      name: {},
                      standbyReplicas: {},
                      status: {},
                      type: {}
                    }
                  }
                },
                collectionErrorDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      id: {},
                      name: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetEffectiveLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['resourceIdentifiers'],
              members: {
                resourceIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['resource', 'type'],
                    members: {
                      resource: {},
                      type: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                effectiveLifecyclePolicyDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      noMinRetentionPeriod: {
                        type: 'boolean'
                      },
                      policyName: {},
                      resource: {},
                      resourceType: {},
                      retentionPeriod: {},
                      type: {}
                    }
                  }
                },
                effectiveLifecyclePolicyErrorDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      resource: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['identifiers'],
              members: {
                identifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type'],
                    members: {
                      name: {},
                      type: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicyDetails: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                lifecyclePolicyErrorDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      name: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetVpcEndpoint: {
            input: {
              type: 'structure',
              required: ['ids'],
              members: {
                ids: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                vpcEndpointDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdDate: {
                        type: 'long'
                      },
                      id: {},
                      name: {},
                      securityGroupIds: {
                        shape: 'S1c'
                      },
                      status: {},
                      subnetIds: {
                        shape: 'S1f'
                      },
                      vpcId: {}
                    }
                  }
                },
                vpcEndpointErrorDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      id: {}
                    }
                  }
                }
              }
            }
          },
          CreateAccessPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policy', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessPolicyDetail: {
                  shape: 'S1p'
                }
              }
            },
            idempotent: true
          },
          CreateCollection: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                standbyReplicas: {},
                tags: {
                  shape: 'S1s'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                createCollectionDetail: {
                  type: 'structure',
                  members: {
                    arn: {},
                    createdDate: {
                      type: 'long'
                    },
                    description: {},
                    id: {},
                    kmsKeyArn: {},
                    lastModifiedDate: {
                      type: 'long'
                    },
                    name: {},
                    standbyReplicas: {},
                    status: {},
                    type: {}
                  }
                }
              }
            },
            idempotent: true
          },
          CreateLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policy', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicyDetail: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          CreateSecurityConfig: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                samlOptions: {
                  shape: 'S23'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                securityConfigDetail: {
                  shape: 'S2a'
                }
              }
            },
            idempotent: true
          },
          CreateSecurityPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policy', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                securityPolicyDetail: {
                  shape: 'S2f'
                }
              }
            },
            idempotent: true
          },
          CreateVpcEndpoint: {
            input: {
              type: 'structure',
              required: ['name', 'subnetIds', 'vpcId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                securityGroupIds: {
                  shape: 'S1c'
                },
                subnetIds: {
                  shape: 'S1f'
                },
                vpcId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                createVpcEndpointDetail: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    status: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DeleteAccessPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteCollection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deleteCollectionDetail: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    status: {}
                  }
                }
              }
            },
            idempotent: true
          },
          DeleteLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSecurityConfig: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSecurityPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteVpcEndpoint: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deleteVpcEndpointDetail: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    status: {}
                  }
                }
              }
            },
            idempotent: true
          },
          GetAccessPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessPolicyDetail: {
                  shape: 'S1p'
                }
              }
            }
          },
          GetAccountSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                accountSettingsDetail: {
                  shape: 'S31'
                }
              }
            }
          },
          GetPoliciesStats: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccessPolicyStats: {
                  type: 'structure',
                  members: {
                    DataPolicyCount: {
                      type: 'long'
                    }
                  }
                },
                LifecyclePolicyStats: {
                  type: 'structure',
                  members: {
                    RetentionPolicyCount: {
                      type: 'long'
                    }
                  }
                },
                SecurityConfigStats: {
                  type: 'structure',
                  members: {
                    SamlConfigCount: {
                      type: 'long'
                    }
                  }
                },
                SecurityPolicyStats: {
                  type: 'structure',
                  members: {
                    EncryptionPolicyCount: {
                      type: 'long'
                    },
                    NetworkPolicyCount: {
                      type: 'long'
                    }
                  }
                },
                TotalPolicyCount: {
                  type: 'long'
                }
              }
            }
          },
          GetSecurityConfig: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                securityConfigDetail: {
                  shape: 'S2a'
                }
              }
            }
          },
          GetSecurityPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                securityPolicyDetail: {
                  shape: 'S2f'
                }
              }
            }
          },
          ListAccessPolicies: {
            input: {
              type: 'structure',
              required: ['type'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resource: {
                  type: 'list',
                  member: {}
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessPolicySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdDate: {
                        type: 'long'
                      },
                      description: {},
                      lastModifiedDate: {
                        type: 'long'
                      },
                      name: {},
                      policyVersion: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCollections: {
            input: {
              type: 'structure',
              members: {
                collectionFilters: {
                  type: 'structure',
                  members: {
                    name: {},
                    status: {}
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
                collectionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      id: {},
                      name: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLifecyclePolicies: {
            input: {
              type: 'structure',
              required: ['type'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resources: {
                  type: 'list',
                  member: {}
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdDate: {
                        type: 'long'
                      },
                      description: {},
                      lastModifiedDate: {
                        type: 'long'
                      },
                      name: {},
                      policyVersion: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSecurityConfigs: {
            input: {
              type: 'structure',
              required: ['type'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                securityConfigSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      configVersion: {},
                      createdDate: {
                        type: 'long'
                      },
                      description: {},
                      id: {},
                      lastModifiedDate: {
                        type: 'long'
                      },
                      type: {}
                    }
                  }
                }
              }
            }
          },
          ListSecurityPolicies: {
            input: {
              type: 'structure',
              required: ['type'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resource: {
                  type: 'list',
                  member: {}
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                securityPolicySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      createdDate: {
                        type: 'long'
                      },
                      description: {},
                      lastModifiedDate: {
                        type: 'long'
                      },
                      name: {},
                      policyVersion: {},
                      type: {}
                    }
                  }
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
                  shape: 'S1s'
                }
              }
            }
          },
          ListVpcEndpoints: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                vpcEndpointFilters: {
                  type: 'structure',
                  members: {
                    status: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                vpcEndpointSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      status: {}
                    }
                  }
                }
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
                  shape: 'S1s'
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
          UpdateAccessPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policyVersion', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                policyVersion: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accessPolicyDetail: {
                  shape: 'S1p'
                }
              }
            },
            idempotent: true
          },
          UpdateAccountSettings: {
            input: {
              type: 'structure',
              members: {
                capacityLimits: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accountSettingsDetail: {
                  shape: 'S31'
                }
              }
            }
          },
          UpdateCollection: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                updateCollectionDetail: {
                  type: 'structure',
                  members: {
                    arn: {},
                    createdDate: {
                      type: 'long'
                    },
                    description: {},
                    id: {},
                    lastModifiedDate: {
                      type: 'long'
                    },
                    name: {},
                    status: {},
                    type: {}
                  }
                }
              }
            },
            idempotent: true
          },
          UpdateLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policyVersion', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                policyVersion: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lifecyclePolicyDetail: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          UpdateSecurityConfig: {
            input: {
              type: 'structure',
              required: ['configVersion', 'id'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                configVersion: {},
                description: {},
                id: {},
                samlOptions: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                securityConfigDetail: {
                  shape: 'S2a'
                }
              }
            },
            idempotent: true
          },
          UpdateSecurityPolicy: {
            input: {
              type: 'structure',
              required: ['name', 'policyVersion', 'type'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                name: {},
                policy: {},
                policyVersion: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                securityPolicyDetail: {
                  shape: 'S2f'
                }
              }
            },
            idempotent: true
          },
          UpdateVpcEndpoint: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                addSecurityGroupIds: {
                  shape: 'S1c'
                },
                addSubnetIds: {
                  shape: 'S1f'
                },
                clientToken: {
                  idempotencyToken: true
                },
                id: {},
                removeSecurityGroupIds: {
                  shape: 'S1c'
                },
                removeSubnetIds: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateVpcEndpointDetail: {
                  type: 'structure',
                  members: {
                    id: {},
                    lastModifiedDate: {
                      type: 'long'
                    },
                    name: {},
                    securityGroupIds: {
                      shape: 'S1c'
                    },
                    status: {},
                    subnetIds: {
                      shape: 'S1f'
                    }
                  }
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Sz: {
            type: 'structure',
            members: {
              createdDate: {
                type: 'long'
              },
              description: {},
              lastModifiedDate: {
                type: 'long'
              },
              name: {},
              policy: {
                shape: 'S11'
              },
              policyVersion: {},
              type: {}
            }
          },
          S11: {
            type: 'structure',
            members: {},
            document: true
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'structure',
            members: {
              createdDate: {
                type: 'long'
              },
              description: {},
              lastModifiedDate: {
                type: 'long'
              },
              name: {},
              policy: {
                shape: 'S11'
              },
              policyVersion: {},
              type: {}
            }
          },
          S1s: {
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
          S23: {
            type: 'structure',
            required: ['metadata'],
            members: {
              groupAttribute: {},
              metadata: {},
              sessionTimeout: {
                type: 'integer'
              },
              userAttribute: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              configVersion: {},
              createdDate: {
                type: 'long'
              },
              description: {},
              id: {},
              lastModifiedDate: {
                type: 'long'
              },
              samlOptions: {
                shape: 'S23'
              },
              type: {}
            }
          },
          S2f: {
            type: 'structure',
            members: {
              createdDate: {
                type: 'long'
              },
              description: {},
              lastModifiedDate: {
                type: 'long'
              },
              name: {},
              policy: {
                shape: 'S11'
              },
              policyVersion: {},
              type: {}
            }
          },
          S31: {
            type: 'structure',
            members: {
              capacityLimits: {
                shape: 'S32'
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              maxIndexingCapacityInOCU: {
                type: 'integer'
              },
              maxSearchCapacityInOCU: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a757cc5f923a099dfd2600557520d668817dc5f8.js.map