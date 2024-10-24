System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-12-01',
          endpointPrefix: 'verifiedpermissions',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'Amazon Verified Permissions',
          serviceId: 'VerifiedPermissions',
          signatureVersion: 'v4',
          signingName: 'verifiedpermissions',
          targetPrefix: 'VerifiedPermissions',
          uid: 'verifiedpermissions-2021-12-01'
        },
        operations: {
          BatchIsAuthorized: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'requests'],
              members: {
                policyStoreId: {},
                entities: {
                  shape: 'S3'
                },
                requests: {
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['request', 'decision', 'determiningPolicies', 'errors'],
                    members: {
                      request: {
                        shape: 'Sj'
                      },
                      decision: {},
                      determiningPolicies: {
                        shape: 'St'
                      },
                      errors: {
                        shape: 'Sw'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchIsAuthorizedWithToken: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'requests'],
              members: {
                policyStoreId: {},
                identityToken: {
                  shape: 'Sz'
                },
                accessToken: {
                  shape: 'Sz'
                },
                entities: {
                  shape: 'S3'
                },
                requests: {
                  type: 'list',
                  member: {
                    shape: 'S11'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                principal: {
                  shape: 'S6'
                },
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['request', 'decision', 'determiningPolicies', 'errors'],
                    members: {
                      request: {
                        shape: 'S11'
                      },
                      decision: {},
                      determiningPolicies: {
                        shape: 'St'
                      },
                      errors: {
                        shape: 'Sw'
                      }
                    }
                  }
                }
              }
            }
          },
          CreateIdentitySource: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'configuration'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                policyStoreId: {},
                configuration: {
                  type: 'structure',
                  members: {
                    cognitoUserPoolConfiguration: {
                      type: 'structure',
                      required: ['userPoolArn'],
                      members: {
                        userPoolArn: {},
                        clientIds: {
                          shape: 'S1a'
                        },
                        groupConfiguration: {
                          type: 'structure',
                          required: ['groupEntityType'],
                          members: {
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        }
                      }
                    },
                    openIdConnectConfiguration: {
                      type: 'structure',
                      required: ['issuer', 'tokenSelection'],
                      members: {
                        issuer: {},
                        entityIdPrefix: {
                          shape: 'S1g'
                        },
                        groupConfiguration: {
                          type: 'structure',
                          required: ['groupClaim', 'groupEntityType'],
                          members: {
                            groupClaim: {
                              shape: 'S1i'
                            },
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        },
                        tokenSelection: {
                          type: 'structure',
                          members: {
                            accessTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                audiences: {
                                  shape: 'S1l'
                                }
                              }
                            },
                            identityTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                clientIds: {
                                  shape: 'S1a'
                                }
                              }
                            }
                          },
                          union: true
                        }
                      }
                    }
                  },
                  union: true
                },
                principalEntityType: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdDate', 'identitySourceId', 'lastUpdatedDate', 'policyStoreId'],
              members: {
                createdDate: {
                  shape: 'S1q'
                },
                identitySourceId: {},
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                policyStoreId: {}
              }
            },
            idempotent: true
          },
          CreatePolicy: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'definition'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                policyStoreId: {},
                definition: {
                  type: 'structure',
                  members: {
                    'static': {
                      type: 'structure',
                      required: ['statement'],
                      members: {
                        description: {
                          shape: 'S1v'
                        },
                        statement: {
                          shape: 'S1w'
                        }
                      }
                    },
                    templateLinked: {
                      type: 'structure',
                      required: ['policyTemplateId'],
                      members: {
                        policyTemplateId: {},
                        principal: {
                          shape: 'S6'
                        },
                        resource: {
                          shape: 'S6'
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyId', 'policyType', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyId: {},
                policyType: {},
                principal: {
                  shape: 'S6'
                },
                resource: {
                  shape: 'S6'
                },
                actions: {
                  shape: 'S21'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                effect: {}
              }
            },
            idempotent: true
          },
          CreatePolicyStore: {
            input: {
              type: 'structure',
              required: ['validationSettings'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                validationSettings: {
                  shape: 'S24'
                },
                description: {
                  shape: 'S26'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'arn', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                arn: {},
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          CreatePolicyTemplate: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'statement'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                policyStoreId: {},
                description: {
                  shape: 'S2a'
                },
                statement: {
                  shape: 'S1w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyTemplateId: {},
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          DeleteIdentitySource: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'identitySourceId'],
              members: {
                policyStoreId: {},
                identitySourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyId'],
              members: {
                policyStoreId: {},
                policyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePolicyStore: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePolicyTemplate: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId'],
              members: {
                policyStoreId: {},
                policyTemplateId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetIdentitySource: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'identitySourceId'],
              members: {
                policyStoreId: {},
                identitySourceId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['createdDate', 'identitySourceId', 'lastUpdatedDate', 'policyStoreId', 'principalEntityType'],
              members: {
                createdDate: {
                  shape: 'S1q'
                },
                details: {
                  deprecated: true,
                  deprecatedMessage: 'This shape has been replaced by ConfigurationDetail',
                  type: 'structure',
                  members: {
                    clientIds: {
                      shape: 'S1a',
                      deprecated: true,
                      deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.clientIds'
                    },
                    userPoolArn: {
                      deprecated: true,
                      deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.userPoolArn'
                    },
                    discoveryUrl: {
                      deprecated: true,
                      deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.issuer'
                    },
                    openIdIssuer: {
                      deprecated: true,
                      deprecatedMessage: 'This attribute has been replaced by configuration'
                    }
                  }
                },
                identitySourceId: {},
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                policyStoreId: {},
                principalEntityType: {
                  shape: 'S1o'
                },
                configuration: {
                  type: 'structure',
                  members: {
                    cognitoUserPoolConfiguration: {
                      type: 'structure',
                      required: ['userPoolArn', 'clientIds', 'issuer'],
                      members: {
                        userPoolArn: {},
                        clientIds: {
                          shape: 'S1a'
                        },
                        issuer: {},
                        groupConfiguration: {
                          type: 'structure',
                          members: {
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        }
                      }
                    },
                    openIdConnectConfiguration: {
                      type: 'structure',
                      required: ['issuer', 'tokenSelection'],
                      members: {
                        issuer: {},
                        entityIdPrefix: {
                          shape: 'S1g'
                        },
                        groupConfiguration: {
                          type: 'structure',
                          required: ['groupClaim', 'groupEntityType'],
                          members: {
                            groupClaim: {
                              shape: 'S1i'
                            },
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        },
                        tokenSelection: {
                          type: 'structure',
                          members: {
                            accessTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                audiences: {
                                  shape: 'S1l'
                                }
                              }
                            },
                            identityTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                clientIds: {
                                  shape: 'S1a'
                                }
                              }
                            }
                          },
                          union: true
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            }
          },
          GetPolicy: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyId'],
              members: {
                policyStoreId: {},
                policyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyId', 'policyType', 'definition', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyId: {},
                policyType: {},
                principal: {
                  shape: 'S6'
                },
                resource: {
                  shape: 'S6'
                },
                actions: {
                  shape: 'S21'
                },
                definition: {
                  type: 'structure',
                  members: {
                    'static': {
                      type: 'structure',
                      required: ['statement'],
                      members: {
                        description: {
                          shape: 'S1v'
                        },
                        statement: {
                          shape: 'S1w'
                        }
                      }
                    },
                    templateLinked: {
                      type: 'structure',
                      required: ['policyTemplateId'],
                      members: {
                        policyTemplateId: {},
                        principal: {
                          shape: 'S6'
                        },
                        resource: {
                          shape: 'S6'
                        }
                      }
                    }
                  },
                  union: true
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                effect: {}
              }
            }
          },
          GetPolicyStore: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'arn', 'validationSettings', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                arn: {},
                validationSettings: {
                  shape: 'S24'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                description: {
                  shape: 'S26'
                }
              }
            }
          },
          GetPolicyTemplate: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId'],
              members: {
                policyStoreId: {},
                policyTemplateId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId', 'statement', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyTemplateId: {},
                description: {
                  shape: 'S2a'
                },
                statement: {
                  shape: 'S1w'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            }
          },
          GetSchema: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'schema', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                schema: {
                  shape: 'S38'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                namespaces: {
                  shape: 'S39'
                }
              }
            }
          },
          IsAuthorized: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {},
                principal: {
                  shape: 'S6'
                },
                action: {
                  shape: 'Sk'
                },
                resource: {
                  shape: 'S6'
                },
                context: {
                  shape: 'Sn'
                },
                entities: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['decision', 'determiningPolicies', 'errors'],
              members: {
                decision: {},
                determiningPolicies: {
                  shape: 'St'
                },
                errors: {
                  shape: 'Sw'
                }
              }
            }
          },
          IsAuthorizedWithToken: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {},
                identityToken: {
                  shape: 'Sz'
                },
                accessToken: {
                  shape: 'Sz'
                },
                action: {
                  shape: 'Sk'
                },
                resource: {
                  shape: 'S6'
                },
                context: {
                  shape: 'Sn'
                },
                entities: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['decision', 'determiningPolicies', 'errors'],
              members: {
                decision: {},
                determiningPolicies: {
                  shape: 'St'
                },
                errors: {
                  shape: 'Sw'
                },
                principal: {
                  shape: 'S6'
                }
              }
            }
          },
          ListIdentitySources: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      principalEntityType: {
                        shape: 'S1o'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['identitySources'],
              members: {
                nextToken: {},
                identitySources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdDate', 'identitySourceId', 'lastUpdatedDate', 'policyStoreId', 'principalEntityType'],
                    members: {
                      createdDate: {
                        shape: 'S1q'
                      },
                      details: {
                        deprecated: true,
                        deprecatedMessage: 'This shape has been replaced by ConfigurationItem',
                        type: 'structure',
                        members: {
                          clientIds: {
                            shape: 'S1a',
                            deprecated: true,
                            deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.clientIds'
                          },
                          userPoolArn: {
                            deprecated: true,
                            deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.userPoolArn'
                          },
                          discoveryUrl: {
                            deprecated: true,
                            deprecatedMessage: 'This attribute has been replaced by configuration.cognitoUserPoolConfiguration.issuer'
                          },
                          openIdIssuer: {
                            deprecated: true,
                            deprecatedMessage: 'This attribute has been replaced by configuration'
                          }
                        }
                      },
                      identitySourceId: {},
                      lastUpdatedDate: {
                        shape: 'S1q'
                      },
                      policyStoreId: {},
                      principalEntityType: {
                        shape: 'S1o'
                      },
                      configuration: {
                        type: 'structure',
                        members: {
                          cognitoUserPoolConfiguration: {
                            type: 'structure',
                            required: ['userPoolArn', 'clientIds', 'issuer'],
                            members: {
                              userPoolArn: {},
                              clientIds: {
                                shape: 'S1a'
                              },
                              issuer: {},
                              groupConfiguration: {
                                type: 'structure',
                                members: {
                                  groupEntityType: {
                                    shape: 'S1d'
                                  }
                                }
                              }
                            }
                          },
                          openIdConnectConfiguration: {
                            type: 'structure',
                            required: ['issuer', 'tokenSelection'],
                            members: {
                              issuer: {},
                              entityIdPrefix: {
                                shape: 'S1g'
                              },
                              groupConfiguration: {
                                type: 'structure',
                                required: ['groupClaim', 'groupEntityType'],
                                members: {
                                  groupClaim: {
                                    shape: 'S1i'
                                  },
                                  groupEntityType: {
                                    shape: 'S1d'
                                  }
                                }
                              },
                              tokenSelection: {
                                type: 'structure',
                                members: {
                                  accessTokenOnly: {
                                    type: 'structure',
                                    members: {
                                      principalIdClaim: {
                                        shape: 'S1i'
                                      },
                                      audiences: {
                                        shape: 'S1l'
                                      }
                                    }
                                  },
                                  identityTokenOnly: {
                                    type: 'structure',
                                    members: {
                                      principalIdClaim: {
                                        shape: 'S1i'
                                      },
                                      clientIds: {
                                        shape: 'S1a'
                                      }
                                    }
                                  }
                                },
                                union: true
                              }
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            }
          },
          ListPolicies: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  type: 'structure',
                  members: {
                    principal: {
                      shape: 'S3z'
                    },
                    resource: {
                      shape: 'S3z'
                    },
                    policyType: {},
                    policyTemplateId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policies'],
              members: {
                nextToken: {},
                policies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['policyStoreId', 'policyId', 'policyType', 'definition', 'createdDate', 'lastUpdatedDate'],
                    members: {
                      policyStoreId: {},
                      policyId: {},
                      policyType: {},
                      principal: {
                        shape: 'S6'
                      },
                      resource: {
                        shape: 'S6'
                      },
                      actions: {
                        shape: 'S21'
                      },
                      definition: {
                        type: 'structure',
                        members: {
                          'static': {
                            type: 'structure',
                            members: {
                              description: {
                                shape: 'S1v'
                              }
                            }
                          },
                          templateLinked: {
                            type: 'structure',
                            required: ['policyTemplateId'],
                            members: {
                              policyTemplateId: {},
                              principal: {
                                shape: 'S6'
                              },
                              resource: {
                                shape: 'S6'
                              }
                            }
                          }
                        },
                        union: true
                      },
                      createdDate: {
                        shape: 'S1q'
                      },
                      lastUpdatedDate: {
                        shape: 'S1q'
                      },
                      effect: {}
                    }
                  }
                }
              }
            }
          },
          ListPolicyStores: {
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
              required: ['policyStores'],
              members: {
                nextToken: {},
                policyStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['policyStoreId', 'arn', 'createdDate'],
                    members: {
                      policyStoreId: {},
                      arn: {},
                      createdDate: {
                        shape: 'S1q'
                      },
                      lastUpdatedDate: {
                        shape: 'S1q'
                      },
                      description: {
                        shape: 'S26'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPolicyTemplates: {
            input: {
              type: 'structure',
              required: ['policyStoreId'],
              members: {
                policyStoreId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyTemplates'],
              members: {
                nextToken: {},
                policyTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['policyStoreId', 'policyTemplateId', 'createdDate', 'lastUpdatedDate'],
                    members: {
                      policyStoreId: {},
                      policyTemplateId: {},
                      description: {
                        shape: 'S2a'
                      },
                      createdDate: {
                        shape: 'S1q'
                      },
                      lastUpdatedDate: {
                        shape: 'S1q'
                      }
                    }
                  }
                }
              }
            }
          },
          PutSchema: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'definition'],
              members: {
                policyStoreId: {},
                definition: {
                  type: 'structure',
                  members: {
                    cedarJson: {
                      shape: 'S38'
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'namespaces', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                namespaces: {
                  shape: 'S39'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          UpdateIdentitySource: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'identitySourceId', 'updateConfiguration'],
              members: {
                policyStoreId: {},
                identitySourceId: {},
                updateConfiguration: {
                  type: 'structure',
                  members: {
                    cognitoUserPoolConfiguration: {
                      type: 'structure',
                      required: ['userPoolArn'],
                      members: {
                        userPoolArn: {},
                        clientIds: {
                          shape: 'S1a'
                        },
                        groupConfiguration: {
                          type: 'structure',
                          required: ['groupEntityType'],
                          members: {
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        }
                      }
                    },
                    openIdConnectConfiguration: {
                      type: 'structure',
                      required: ['issuer', 'tokenSelection'],
                      members: {
                        issuer: {},
                        entityIdPrefix: {
                          shape: 'S1g'
                        },
                        groupConfiguration: {
                          type: 'structure',
                          required: ['groupClaim', 'groupEntityType'],
                          members: {
                            groupClaim: {
                              shape: 'S1i'
                            },
                            groupEntityType: {
                              shape: 'S1d'
                            }
                          }
                        },
                        tokenSelection: {
                          type: 'structure',
                          members: {
                            accessTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                audiences: {
                                  shape: 'S1l'
                                }
                              }
                            },
                            identityTokenOnly: {
                              type: 'structure',
                              members: {
                                principalIdClaim: {
                                  shape: 'S1i'
                                },
                                clientIds: {
                                  shape: 'S1a'
                                }
                              }
                            }
                          },
                          union: true
                        }
                      }
                    }
                  },
                  union: true
                },
                principalEntityType: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdDate', 'identitySourceId', 'lastUpdatedDate', 'policyStoreId'],
              members: {
                createdDate: {
                  shape: 'S1q'
                },
                identitySourceId: {},
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                policyStoreId: {}
              }
            },
            idempotent: true
          },
          UpdatePolicy: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyId', 'definition'],
              members: {
                policyStoreId: {},
                policyId: {},
                definition: {
                  type: 'structure',
                  members: {
                    'static': {
                      type: 'structure',
                      required: ['statement'],
                      members: {
                        description: {
                          shape: 'S1v'
                        },
                        statement: {
                          shape: 'S1w'
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyId', 'policyType', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyId: {},
                policyType: {},
                principal: {
                  shape: 'S6'
                },
                resource: {
                  shape: 'S6'
                },
                actions: {
                  shape: 'S21'
                },
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                },
                effect: {}
              }
            },
            idempotent: true
          },
          UpdatePolicyStore: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'validationSettings'],
              members: {
                policyStoreId: {},
                validationSettings: {
                  shape: 'S24'
                },
                description: {
                  shape: 'S26'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'arn', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                arn: {},
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          },
          UpdatePolicyTemplate: {
            input: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId', 'statement'],
              members: {
                policyStoreId: {},
                policyTemplateId: {},
                description: {
                  shape: 'S2a'
                },
                statement: {
                  shape: 'S1w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policyStoreId', 'policyTemplateId', 'createdDate', 'lastUpdatedDate'],
              members: {
                policyStoreId: {},
                policyTemplateId: {},
                createdDate: {
                  shape: 'S1q'
                },
                lastUpdatedDate: {
                  shape: 'S1q'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              entityList: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['identifier'],
                  members: {
                    identifier: {
                      shape: 'S6'
                    },
                    attributes: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sb'
                      }
                    },
                    parents: {
                      type: 'list',
                      member: {
                        shape: 'S6'
                      }
                    }
                  }
                }
              }
            },
            union: true
          },
          S6: {
            type: 'structure',
            required: ['entityType', 'entityId'],
            members: {
              entityType: {
                type: 'string',
                sensitive: true
              },
              entityId: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sb: {
            type: 'structure',
            members: {
              'boolean': {
                type: 'boolean',
                sensitive: true
              },
              entityIdentifier: {
                shape: 'S6'
              },
              'long': {
                type: 'long',
                sensitive: true
              },
              string: {
                type: 'string',
                sensitive: true
              },
              set: {
                type: 'list',
                member: {
                  shape: 'Sb'
                }
              },
              record: {
                type: 'map',
                key: {},
                value: {
                  shape: 'Sb'
                }
              }
            },
            union: true
          },
          Sj: {
            type: 'structure',
            members: {
              principal: {
                shape: 'S6'
              },
              action: {
                shape: 'Sk'
              },
              resource: {
                shape: 'S6'
              },
              context: {
                shape: 'Sn'
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['actionType', 'actionId'],
            members: {
              actionType: {
                type: 'string',
                sensitive: true
              },
              actionId: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {
              contextMap: {
                type: 'map',
                key: {},
                value: {
                  shape: 'Sb'
                },
                sensitive: true
              }
            },
            union: true
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['policyId'],
              members: {
                policyId: {}
              }
            }
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['errorDescription'],
              members: {
                errorDescription: {}
              },
              sensitive: true
            }
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S11: {
            type: 'structure',
            members: {
              action: {
                shape: 'Sk'
              },
              resource: {
                shape: 'S6'
              },
              context: {
                shape: 'Sn'
              }
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S1d: {
            type: 'string',
            sensitive: true
          },
          S1g: {
            type: 'string',
            sensitive: true
          },
          S1i: {
            type: 'string',
            sensitive: true
          },
          S1l: {
            type: 'list',
            member: {}
          },
          S1o: {
            type: 'string',
            sensitive: true
          },
          S1q: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1v: {
            type: 'string',
            sensitive: true
          },
          S1w: {
            type: 'string',
            sensitive: true
          },
          S21: {
            type: 'list',
            member: {
              shape: 'Sk'
            }
          },
          S24: {
            type: 'structure',
            required: ['mode'],
            members: {
              mode: {}
            }
          },
          S26: {
            type: 'string',
            sensitive: true
          },
          S2a: {
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
              type: 'string',
              sensitive: true
            }
          },
          S3z: {
            type: 'structure',
            members: {
              unspecified: {
                type: 'boolean'
              },
              identifier: {
                shape: 'S6'
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=878faafe73afc71c02864ea79876a1e288692ee8.js.map