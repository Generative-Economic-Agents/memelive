System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-17',
          endpointPrefix: 'catalog.marketplace',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AWS Marketplace Catalog',
          serviceFullName: 'AWS Marketplace Catalog Service',
          serviceId: 'Marketplace Catalog',
          signatureVersion: 'v4',
          signingName: 'aws-marketplace',
          uid: 'marketplace-catalog-2018-09-17'
        },
        operations: {
          BatchDescribeEntities: {
            http: {
              requestUri: '/BatchDescribeEntities'
            },
            input: {
              type: 'structure',
              required: ['EntityRequestList'],
              members: {
                EntityRequestList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Catalog', 'EntityId'],
                    members: {
                      Catalog: {},
                      EntityId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityDetails: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      EntityType: {},
                      EntityArn: {},
                      EntityIdentifier: {},
                      LastModifiedDate: {},
                      DetailsDocument: {
                        shape: 'Sd'
                      }
                    }
                  }
                },
                Errors: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CancelChangeSet: {
            http: {
              method: 'PATCH',
              requestUri: '/CancelChangeSet'
            },
            input: {
              type: 'structure',
              required: ['Catalog', 'ChangeSetId'],
              members: {
                Catalog: {
                  location: 'querystring',
                  locationName: 'catalog'
                },
                ChangeSetId: {
                  location: 'querystring',
                  locationName: 'changeSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeSetId: {},
                ChangeSetArn: {}
              }
            }
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/DeleteResourcePolicy'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeChangeSet: {
            http: {
              method: 'GET',
              requestUri: '/DescribeChangeSet'
            },
            input: {
              type: 'structure',
              required: ['Catalog', 'ChangeSetId'],
              members: {
                Catalog: {
                  location: 'querystring',
                  locationName: 'catalog'
                },
                ChangeSetId: {
                  location: 'querystring',
                  locationName: 'changeSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeSetId: {},
                ChangeSetArn: {},
                ChangeSetName: {},
                Intent: {},
                StartTime: {},
                EndTime: {},
                Status: {},
                FailureCode: {},
                FailureDescription: {},
                ChangeSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChangeType: {},
                      Entity: {
                        shape: 'Sy'
                      },
                      Details: {},
                      DetailsDocument: {
                        shape: 'Sd'
                      },
                      ErrorDetailList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ErrorCode: {},
                            ErrorMessage: {}
                          }
                        }
                      },
                      ChangeName: {}
                    }
                  }
                }
              }
            }
          },
          DescribeEntity: {
            http: {
              method: 'GET',
              requestUri: '/DescribeEntity'
            },
            input: {
              type: 'structure',
              required: ['Catalog', 'EntityId'],
              members: {
                Catalog: {
                  location: 'querystring',
                  locationName: 'catalog'
                },
                EntityId: {
                  location: 'querystring',
                  locationName: 'entityId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityType: {},
                EntityIdentifier: {},
                EntityArn: {},
                LastModifiedDate: {},
                Details: {},
                DetailsDocument: {
                  shape: 'Sd'
                }
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/GetResourcePolicy'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          ListChangeSets: {
            http: {
              requestUri: '/ListChangeSets'
            },
            input: {
              type: 'structure',
              required: ['Catalog'],
              members: {
                Catalog: {},
                FilterList: {
                  shape: 'S1a'
                },
                Sort: {
                  shape: 'S1f'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeSetSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChangeSetId: {},
                      ChangeSetArn: {},
                      ChangeSetName: {},
                      StartTime: {},
                      EndTime: {},
                      Status: {},
                      EntityIdList: {
                        type: 'list',
                        member: {}
                      },
                      FailureCode: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEntities: {
            http: {
              requestUri: '/ListEntities'
            },
            input: {
              type: 'structure',
              required: ['Catalog', 'EntityType'],
              members: {
                Catalog: {},
                EntityType: {},
                FilterList: {
                  shape: 'S1a'
                },
                Sort: {
                  shape: 'S1f'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                OwnershipType: {},
                EntityTypeFilters: {
                  type: 'structure',
                  members: {
                    DataProductFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        ProductTitle: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        Visibility: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    SaaSProductFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        ProductTitle: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        Visibility: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    AmiProductFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        },
                        ProductTitle: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        Visibility: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        }
                      }
                    },
                    OfferFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        Name: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ProductId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        ResaleAuthorizationId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        ReleaseDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        },
                        AvailabilityEndDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        },
                        BuyerAccounts: {
                          type: 'structure',
                          members: {
                            WildCardValue: {}
                          }
                        },
                        State: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        Targeting: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    ContainerProductFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        },
                        ProductTitle: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        Visibility: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        }
                      }
                    },
                    ResaleAuthorizationFilters: {
                      type: 'structure',
                      members: {
                        EntityId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        Name: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ProductId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        CreatedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            },
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        AvailabilityEndDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            },
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        ManufacturerAccountId: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ProductName: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ManufacturerLegalName: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ResellerAccountID: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        ResellerLegalName: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            },
                            WildCardValue: {}
                          }
                        },
                        Status: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        OfferExtendedStatus: {
                          type: 'structure',
                          members: {
                            ValueList: {
                              type: 'list',
                              member: {}
                            }
                          }
                        },
                        LastModifiedDate: {
                          type: 'structure',
                          members: {
                            DateRange: {
                              type: 'structure',
                              members: {
                                AfterValue: {},
                                BeforeValue: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  union: true
                },
                EntityTypeSort: {
                  type: 'structure',
                  members: {
                    DataProductSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    },
                    SaaSProductSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    },
                    AmiProductSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    },
                    OfferSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    },
                    ContainerProductSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    },
                    ResaleAuthorizationSort: {
                      type: 'structure',
                      members: {
                        SortBy: {},
                        SortOrder: {}
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EntitySummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      EntityType: {},
                      EntityId: {},
                      EntityArn: {},
                      LastModifiedDate: {},
                      Visibility: {},
                      AmiProductSummary: {
                        type: 'structure',
                        members: {
                          ProductTitle: {},
                          Visibility: {}
                        }
                      },
                      ContainerProductSummary: {
                        type: 'structure',
                        members: {
                          ProductTitle: {},
                          Visibility: {}
                        }
                      },
                      DataProductSummary: {
                        type: 'structure',
                        members: {
                          ProductTitle: {},
                          Visibility: {}
                        }
                      },
                      SaaSProductSummary: {
                        type: 'structure',
                        members: {
                          ProductTitle: {},
                          Visibility: {}
                        }
                      },
                      OfferSummary: {
                        type: 'structure',
                        members: {
                          Name: {},
                          ProductId: {},
                          ResaleAuthorizationId: {},
                          ReleaseDate: {},
                          AvailabilityEndDate: {},
                          BuyerAccounts: {
                            type: 'list',
                            member: {}
                          },
                          State: {},
                          Targeting: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      ResaleAuthorizationSummary: {
                        type: 'structure',
                        members: {
                          Name: {},
                          ProductId: {},
                          ProductName: {},
                          ManufacturerAccountId: {},
                          ManufacturerLegalName: {},
                          ResellerAccountID: {},
                          ResellerLegalName: {},
                          Status: {},
                          OfferExtendedStatus: {},
                          CreatedDate: {},
                          AvailabilityEndDate: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/ListTagsForResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S5y'
                }
              }
            }
          },
          PutResourcePolicy: {
            http: {
              requestUri: '/PutResourcePolicy'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartChangeSet: {
            http: {
              requestUri: '/StartChangeSet'
            },
            input: {
              type: 'structure',
              required: ['Catalog', 'ChangeSet'],
              members: {
                Catalog: {},
                ChangeSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ChangeType', 'Entity'],
                    members: {
                      ChangeType: {},
                      Entity: {
                        shape: 'Sy'
                      },
                      EntityTags: {
                        shape: 'S5y'
                      },
                      Details: {},
                      DetailsDocument: {
                        shape: 'Sd'
                      },
                      ChangeName: {}
                    }
                  }
                },
                ChangeSetName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                ChangeSetTags: {
                  shape: 'S5y'
                },
                Intent: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeSetId: {},
                ChangeSetArn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/TagResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S5y'
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
              requestUri: '/UntagResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
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
          Sd: {
            type: 'structure',
            members: {},
            document: true
          },
          Sy: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              Identifier: {}
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                ValueList: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1f: {
            type: 'structure',
            members: {
              SortBy: {},
              SortOrder: {}
            }
          },
          S5y: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=30c4eb86ec46d58d3e82544ffb7072353addb082.js.map