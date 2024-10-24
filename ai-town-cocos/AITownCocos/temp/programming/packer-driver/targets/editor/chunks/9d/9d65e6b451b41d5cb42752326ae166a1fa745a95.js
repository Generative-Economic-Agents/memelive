System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-10-03',
          endpointPrefix: 'cases',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'ConnectCases',
          serviceFullName: 'Amazon Connect Cases',
          serviceId: 'ConnectCases',
          signatureVersion: 'v4',
          signingName: 'cases',
          uid: 'connectcases-2022-10-03'
        },
        operations: {
          BatchGetField: {
            http: {
              requestUri: '/domains/{domainId}/fields-batch',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fields'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fields: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errors', 'fields'],
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'id'],
                    members: {
                      errorCode: {},
                      id: {},
                      message: {}
                    }
                  }
                },
                fields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['fieldArn', 'fieldId', 'name', 'namespace', 'type'],
                    members: {
                      createdTime: {
                        shape: 'Sc'
                      },
                      deleted: {
                        type: 'boolean'
                      },
                      description: {},
                      fieldArn: {},
                      fieldId: {},
                      lastModifiedTime: {
                        shape: 'Sg'
                      },
                      name: {},
                      namespace: {},
                      tags: {
                        shape: 'Sj'
                      },
                      type: {}
                    }
                  }
                }
              }
            }
          },
          BatchPutFieldOptions: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/fields/{fieldId}/options',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fieldId', 'options'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fieldId: {
                  location: 'uri',
                  locationName: 'fieldId'
                },
                options: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'message', 'value'],
                    members: {
                      errorCode: {},
                      message: {},
                      value: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          CreateCase: {
            http: {
              requestUri: '/domains/{domainId}/cases',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fields', 'templateId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fields: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                performedBy: {
                  shape: 'S12'
                },
                templateId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['caseArn', 'caseId'],
              members: {
                caseArn: {},
                caseId: {}
              }
            },
            idempotent: true
          },
          CreateDomain: {
            http: {
              requestUri: '/domains',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainArn', 'domainId', 'domainStatus'],
              members: {
                domainArn: {},
                domainId: {},
                domainStatus: {}
              }
            },
            idempotent: true
          },
          CreateField: {
            http: {
              requestUri: '/domains/{domainId}/fields',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'name', 'type'],
              members: {
                description: {},
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['fieldArn', 'fieldId'],
              members: {
                fieldArn: {},
                fieldId: {}
              }
            },
            idempotent: true
          },
          CreateLayout: {
            http: {
              requestUri: '/domains/{domainId}/layouts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['content', 'domainId', 'name'],
              members: {
                content: {
                  shape: 'S1g'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['layoutArn', 'layoutId'],
              members: {
                layoutArn: {},
                layoutId: {}
              }
            }
          },
          CreateRelatedItem: {
            http: {
              requestUri: '/domains/{domainId}/cases/{caseId}/related-items/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['caseId', 'content', 'domainId', 'type'],
              members: {
                caseId: {
                  location: 'uri',
                  locationName: 'caseId'
                },
                content: {
                  type: 'structure',
                  members: {
                    comment: {
                      shape: 'S1v'
                    },
                    contact: {
                      type: 'structure',
                      required: ['contactArn'],
                      members: {
                        contactArn: {}
                      }
                    },
                    file: {
                      shape: 'S20'
                    }
                  },
                  union: true
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                performedBy: {
                  shape: 'S12'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['relatedItemArn', 'relatedItemId'],
              members: {
                relatedItemArn: {},
                relatedItemId: {}
              }
            },
            idempotent: true
          },
          CreateTemplate: {
            http: {
              requestUri: '/domains/{domainId}/templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'name'],
              members: {
                description: {},
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                layoutConfiguration: {
                  shape: 'S28'
                },
                name: {},
                requiredFields: {
                  shape: 'S2a'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['templateArn', 'templateId'],
              members: {
                templateArn: {},
                templateId: {}
              }
            },
            idempotent: true
          },
          DeleteDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{domainId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteField: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{domainId}/fields/{fieldId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fieldId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fieldId: {
                  location: 'uri',
                  locationName: 'fieldId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteLayout: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{domainId}/layouts/{layoutId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'layoutId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                layoutId: {
                  location: 'uri',
                  locationName: 'layoutId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/domains/{domainId}/templates/{templateId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'templateId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                templateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetCase: {
            http: {
              requestUri: '/domains/{domainId}/cases/{caseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['caseId', 'domainId', 'fields'],
              members: {
                caseId: {
                  location: 'uri',
                  locationName: 'caseId'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fields: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['fields', 'templateId'],
              members: {
                fields: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                nextToken: {},
                tags: {
                  shape: 'Sj'
                },
                templateId: {}
              }
            }
          },
          GetCaseAuditEvents: {
            http: {
              requestUri: '/domains/{domainId}/cases/{caseId}/audit-history',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['caseId', 'domainId'],
              members: {
                caseId: {
                  location: 'uri',
                  locationName: 'caseId'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['auditEvents'],
              members: {
                auditEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventId', 'fields', 'performedTime', 'type'],
                    members: {
                      eventId: {},
                      fields: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['eventFieldId', 'newValue'],
                          members: {
                            eventFieldId: {},
                            newValue: {
                              shape: 'S31'
                            },
                            oldValue: {
                              shape: 'S31'
                            }
                          }
                        }
                      },
                      performedBy: {
                        type: 'structure',
                        required: ['iamPrincipalArn'],
                        members: {
                          iamPrincipalArn: {},
                          user: {
                            shape: 'S12'
                          }
                        }
                      },
                      performedTime: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                      },
                      relatedItemType: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetCaseEventConfiguration: {
            http: {
              requestUri: '/domains/{domainId}/case-event-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['eventBridge'],
              members: {
                eventBridge: {
                  shape: 'S39'
                }
              }
            }
          },
          GetDomain: {
            http: {
              requestUri: '/domains/{domainId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdTime', 'domainArn', 'domainId', 'domainStatus', 'name'],
              members: {
                createdTime: {
                  shape: 'Sc'
                },
                domainArn: {},
                domainId: {},
                domainStatus: {},
                name: {},
                tags: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetLayout: {
            http: {
              requestUri: '/domains/{domainId}/layouts/{layoutId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'layoutId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                layoutId: {
                  location: 'uri',
                  locationName: 'layoutId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['content', 'layoutArn', 'layoutId', 'name'],
              members: {
                content: {
                  shape: 'S1g'
                },
                createdTime: {
                  shape: 'Sc'
                },
                deleted: {
                  type: 'boolean'
                },
                lastModifiedTime: {
                  shape: 'Sg'
                },
                layoutArn: {},
                layoutId: {},
                name: {},
                tags: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetTemplate: {
            http: {
              requestUri: '/domains/{domainId}/templates/{templateId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'templateId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                templateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'status', 'templateArn', 'templateId'],
              members: {
                createdTime: {
                  shape: 'Sc'
                },
                deleted: {
                  type: 'boolean'
                },
                description: {},
                lastModifiedTime: {
                  shape: 'Sg'
                },
                layoutConfiguration: {
                  shape: 'S28'
                },
                name: {},
                requiredFields: {
                  shape: 'S2a'
                },
                status: {},
                tags: {
                  shape: 'Sj'
                },
                templateArn: {},
                templateId: {}
              }
            }
          },
          ListCasesForContact: {
            http: {
              requestUri: '/domains/{domainId}/list-cases-for-contact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contactArn', 'domainId'],
              members: {
                contactArn: {},
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['cases'],
              members: {
                cases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['caseId', 'templateId'],
                    members: {
                      caseId: {},
                      templateId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDomains: {
            http: {
              requestUri: '/domains-list',
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
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domains'],
              members: {
                domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['domainArn', 'domainId', 'name'],
                    members: {
                      domainArn: {},
                      domainId: {},
                      name: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFieldOptions: {
            http: {
              requestUri: '/domains/{domainId}/fields/{fieldId}/options-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fieldId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fieldId: {
                  location: 'uri',
                  locationName: 'fieldId'
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
                values: {
                  location: 'querystring',
                  locationName: 'values',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['options'],
              members: {
                nextToken: {},
                options: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                }
              }
            }
          },
          ListFields: {
            http: {
              requestUri: '/domains/{domainId}/fields-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
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
              required: ['fields'],
              members: {
                fields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['fieldArn', 'fieldId', 'name', 'namespace', 'type'],
                    members: {
                      fieldArn: {},
                      fieldId: {},
                      name: {},
                      namespace: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLayouts: {
            http: {
              requestUri: '/domains/{domainId}/layouts-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
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
              required: ['layouts'],
              members: {
                layouts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['layoutArn', 'layoutId', 'name'],
                    members: {
                      layoutArn: {},
                      layoutId: {},
                      name: {}
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
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sj'
                }
              }
            },
            idempotent: true
          },
          ListTemplates: {
            http: {
              requestUri: '/domains/{domainId}/templates-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
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
                  locationName: 'status',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['templates'],
              members: {
                nextToken: {},
                templates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'status', 'templateArn', 'templateId'],
                    members: {
                      name: {},
                      status: {},
                      templateArn: {},
                      templateId: {}
                    }
                  }
                }
              }
            }
          },
          PutCaseEventConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/case-event-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'eventBridge'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                eventBridge: {
                  shape: 'S39'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchCases: {
            http: {
              requestUri: '/domains/{domainId}/cases-search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId'],
              members: {
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fields: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                filter: {
                  shape: 'S4k'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                searchTerm: {},
                sorts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['fieldId', 'sortOrder'],
                    members: {
                      fieldId: {},
                      sortOrder: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cases'],
              members: {
                cases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['caseId', 'fields', 'templateId'],
                    members: {
                      caseId: {},
                      fields: {
                        type: 'list',
                        member: {
                          shape: 'Sx'
                        }
                      },
                      tags: {
                        shape: 'Sj'
                      },
                      templateId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchRelatedItems: {
            http: {
              requestUri: '/domains/{domainId}/cases/{caseId}/related-items-search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['caseId', 'domainId'],
              members: {
                caseId: {
                  location: 'uri',
                  locationName: 'caseId'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      comment: {
                        type: 'structure',
                        members: {}
                      },
                      contact: {
                        type: 'structure',
                        members: {
                          channel: {
                            type: 'list',
                            member: {}
                          },
                          contactArn: {}
                        }
                      },
                      file: {
                        type: 'structure',
                        members: {
                          fileArn: {}
                        }
                      }
                    },
                    union: true
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
              required: ['relatedItems'],
              members: {
                nextToken: {},
                relatedItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['associationTime', 'content', 'relatedItemId', 'type'],
                    members: {
                      associationTime: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                      },
                      content: {
                        type: 'structure',
                        members: {
                          comment: {
                            shape: 'S1v'
                          },
                          contact: {
                            type: 'structure',
                            required: ['channel', 'connectedToSystemTime', 'contactArn'],
                            members: {
                              channel: {},
                              connectedToSystemTime: {
                                type: 'timestamp',
                                timestampFormat: 'iso8601'
                              },
                              contactArn: {}
                            }
                          },
                          file: {
                            shape: 'S20'
                          }
                        },
                        union: true
                      },
                      performedBy: {
                        shape: 'S12'
                      },
                      relatedItemId: {},
                      tags: {
                        shape: 'Sj'
                      },
                      type: {}
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'tags'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                tags: {
                  shape: 'Sj'
                }
              }
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'tagKeys'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            idempotent: true
          },
          UpdateCase: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/cases/{caseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['caseId', 'domainId', 'fields'],
              members: {
                caseId: {
                  location: 'uri',
                  locationName: 'caseId'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fields: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                performedBy: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateField: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/fields/{fieldId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'fieldId'],
              members: {
                description: {},
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                fieldId: {
                  location: 'uri',
                  locationName: 'fieldId'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateLayout: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/layouts/{layoutId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'layoutId'],
              members: {
                content: {
                  shape: 'S1g'
                },
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                layoutId: {
                  location: 'uri',
                  locationName: 'layoutId'
                },
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/domains/{domainId}/templates/{templateId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['domainId', 'templateId'],
              members: {
                description: {},
                domainId: {
                  location: 'uri',
                  locationName: 'domainId'
                },
                layoutConfiguration: {
                  shape: 'S28'
                },
                name: {},
                requiredFields: {
                  shape: 'S2a'
                },
                status: {},
                templateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['id'],
            members: {
              id: {}
            }
          },
          Sc: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sg: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sj: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'structure',
            required: ['active', 'name', 'value'],
            members: {
              active: {
                type: 'boolean'
              },
              name: {},
              value: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['id', 'value'],
            members: {
              id: {},
              value: {
                type: 'structure',
                members: {
                  booleanValue: {
                    type: 'boolean'
                  },
                  doubleValue: {
                    type: 'double'
                  },
                  emptyValue: {
                    shape: 'S10'
                  },
                  stringValue: {},
                  userArnValue: {}
                },
                union: true
              }
            }
          },
          S10: {
            type: 'structure',
            members: {}
          },
          S12: {
            type: 'structure',
            members: {
              userArn: {}
            },
            union: true
          },
          S1g: {
            type: 'structure',
            members: {
              basic: {
                type: 'structure',
                members: {
                  moreInfo: {
                    shape: 'S1i'
                  },
                  topPanel: {
                    shape: 'S1i'
                  }
                }
              }
            },
            union: true
          },
          S1i: {
            type: 'structure',
            members: {
              sections: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    fieldGroup: {
                      type: 'structure',
                      required: ['fields'],
                      members: {
                        fields: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['id'],
                            members: {
                              id: {}
                            }
                          }
                        },
                        name: {}
                      }
                    }
                  },
                  union: true
                }
              }
            }
          },
          S1v: {
            type: 'structure',
            required: ['body', 'contentType'],
            members: {
              body: {},
              contentType: {}
            }
          },
          S20: {
            type: 'structure',
            required: ['fileArn'],
            members: {
              fileArn: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              defaultLayout: {}
            }
          },
          S2a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['fieldId'],
              members: {
                fieldId: {}
              }
            }
          },
          S31: {
            type: 'structure',
            members: {
              booleanValue: {
                type: 'boolean'
              },
              doubleValue: {
                type: 'double'
              },
              emptyValue: {
                shape: 'S10'
              },
              stringValue: {},
              userArnValue: {}
            },
            union: true
          },
          S39: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              },
              includedData: {
                type: 'structure',
                members: {
                  caseData: {
                    type: 'structure',
                    required: ['fields'],
                    members: {
                      fields: {
                        type: 'list',
                        member: {
                          shape: 'S4'
                        }
                      }
                    }
                  },
                  relatedItemData: {
                    type: 'structure',
                    required: ['includeContent'],
                    members: {
                      includeContent: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          S4k: {
            type: 'structure',
            members: {
              andAll: {
                type: 'list',
                member: {
                  shape: 'S4k'
                }
              },
              field: {
                type: 'structure',
                members: {
                  contains: {
                    shape: 'Sx'
                  },
                  equalTo: {
                    shape: 'Sx'
                  },
                  greaterThan: {
                    shape: 'Sx'
                  },
                  greaterThanOrEqualTo: {
                    shape: 'Sx'
                  },
                  lessThan: {
                    shape: 'Sx'
                  },
                  lessThanOrEqualTo: {
                    shape: 'Sx'
                  }
                },
                union: true
              },
              not: {
                shape: 'S4k'
              },
              orAll: {
                type: 'list',
                member: {
                  shape: 'S4k'
                }
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9d65e6b451b41d5cb42752326ae166a1fa745a95.js.map