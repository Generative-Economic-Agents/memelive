System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-05-10',
          endpointPrefix: 'clouddirectory',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CloudDirectory',
          serviceId: 'CloudDirectory',
          signatureVersion: 'v4',
          signingName: 'clouddirectory',
          uid: 'clouddirectory-2016-05-10'
        },
        operations: {
          AddFacetToObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/facets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'SchemaFacet', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                SchemaFacet: {
                  shape: 'S3'
                },
                ObjectAttributeList: {
                  shape: 'S5'
                },
                ObjectReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ApplySchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/apply',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PublishedSchemaArn', 'DirectoryArn'],
              members: {
                PublishedSchemaArn: {},
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppliedSchemaArn: {},
                DirectoryArn: {}
              }
            }
          },
          AttachObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/attach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ParentReference', 'ChildReference', 'LinkName'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ParentReference: {
                  shape: 'Sf'
                },
                ChildReference: {
                  shape: 'Sf'
                },
                LinkName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AttachedObjectIdentifier: {}
              }
            }
          },
          AttachPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/policy/attach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'PolicyReference', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                PolicyReference: {
                  shape: 'Sf'
                },
                ObjectReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AttachToIndex: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/index/attach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'IndexReference', 'TargetReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                IndexReference: {
                  shape: 'Sf'
                },
                TargetReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AttachedObjectIdentifier: {}
              }
            }
          },
          AttachTypedLink: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/attach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'SourceObjectReference', 'TargetObjectReference', 'TypedLinkFacet', 'Attributes'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                SourceObjectReference: {
                  shape: 'Sf'
                },
                TargetObjectReference: {
                  shape: 'Sf'
                },
                TypedLinkFacet: {
                  shape: 'St'
                },
                Attributes: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TypedLinkSpecifier: {
                  shape: 'Sy'
                }
              }
            }
          },
          BatchRead: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/batchread',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'Operations'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Operations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ListObjectAttributes: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          },
                          FacetFilter: {
                            shape: 'S3'
                          }
                        }
                      },
                      ListObjectChildren: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      ListAttachedIndices: {
                        type: 'structure',
                        required: ['TargetReference'],
                        members: {
                          TargetReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      ListObjectParentPaths: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      GetObjectInformation: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      GetObjectAttributes: {
                        type: 'structure',
                        required: ['ObjectReference', 'SchemaFacet', 'AttributeNames'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          SchemaFacet: {
                            shape: 'S3'
                          },
                          AttributeNames: {
                            shape: 'S1a'
                          }
                        }
                      },
                      ListObjectPolicies: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      ListPolicyAttachments: {
                        type: 'structure',
                        required: ['PolicyReference'],
                        members: {
                          PolicyReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      LookupPolicy: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      ListIndex: {
                        type: 'structure',
                        required: ['IndexReference'],
                        members: {
                          RangesOnIndexedValues: {
                            shape: 'S1f'
                          },
                          IndexReference: {
                            shape: 'Sf'
                          },
                          MaxResults: {
                            type: 'integer'
                          },
                          NextToken: {}
                        }
                      },
                      ListOutgoingTypedLinks: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          FilterAttributeRanges: {
                            shape: 'S1k'
                          },
                          FilterTypedLink: {
                            shape: 'St'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      ListIncomingTypedLinks: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          FilterAttributeRanges: {
                            shape: 'S1k'
                          },
                          FilterTypedLink: {
                            shape: 'St'
                          },
                          NextToken: {},
                          MaxResults: {
                            type: 'integer'
                          }
                        }
                      },
                      GetLinkAttributes: {
                        type: 'structure',
                        required: ['TypedLinkSpecifier', 'AttributeNames'],
                        members: {
                          TypedLinkSpecifier: {
                            shape: 'Sy'
                          },
                          AttributeNames: {
                            shape: 'S1a'
                          }
                        }
                      }
                    }
                  }
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SuccessfulResponse: {
                        type: 'structure',
                        members: {
                          ListObjectAttributes: {
                            type: 'structure',
                            members: {
                              Attributes: {
                                shape: 'S5'
                              },
                              NextToken: {}
                            }
                          },
                          ListObjectChildren: {
                            type: 'structure',
                            members: {
                              Children: {
                                shape: 'S1v'
                              },
                              NextToken: {}
                            }
                          },
                          GetObjectInformation: {
                            type: 'structure',
                            members: {
                              SchemaFacets: {
                                shape: 'S1x'
                              },
                              ObjectIdentifier: {}
                            }
                          },
                          GetObjectAttributes: {
                            type: 'structure',
                            members: {
                              Attributes: {
                                shape: 'S5'
                              }
                            }
                          },
                          ListAttachedIndices: {
                            type: 'structure',
                            members: {
                              IndexAttachments: {
                                shape: 'S20'
                              },
                              NextToken: {}
                            }
                          },
                          ListObjectParentPaths: {
                            type: 'structure',
                            members: {
                              PathToObjectIdentifiersList: {
                                shape: 'S23'
                              },
                              NextToken: {}
                            }
                          },
                          ListObjectPolicies: {
                            type: 'structure',
                            members: {
                              AttachedPolicyIds: {
                                shape: 'S26'
                              },
                              NextToken: {}
                            }
                          },
                          ListPolicyAttachments: {
                            type: 'structure',
                            members: {
                              ObjectIdentifiers: {
                                shape: 'S26'
                              },
                              NextToken: {}
                            }
                          },
                          LookupPolicy: {
                            type: 'structure',
                            members: {
                              PolicyToPathList: {
                                shape: 'S2a'
                              },
                              NextToken: {}
                            }
                          },
                          ListIndex: {
                            type: 'structure',
                            members: {
                              IndexAttachments: {
                                shape: 'S20'
                              },
                              NextToken: {}
                            }
                          },
                          ListOutgoingTypedLinks: {
                            type: 'structure',
                            members: {
                              TypedLinkSpecifiers: {
                                shape: 'S2h'
                              },
                              NextToken: {}
                            }
                          },
                          ListIncomingTypedLinks: {
                            type: 'structure',
                            members: {
                              LinkSpecifiers: {
                                shape: 'S2h'
                              },
                              NextToken: {}
                            }
                          },
                          GetLinkAttributes: {
                            type: 'structure',
                            members: {
                              Attributes: {
                                shape: 'S5'
                              }
                            }
                          }
                        }
                      },
                      ExceptionResponse: {
                        type: 'structure',
                        members: {
                          Type: {},
                          Message: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          BatchWrite: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/batchwrite',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'Operations'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Operations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreateObject: {
                        type: 'structure',
                        required: ['SchemaFacet', 'ObjectAttributeList'],
                        members: {
                          SchemaFacet: {
                            shape: 'S1x'
                          },
                          ObjectAttributeList: {
                            shape: 'S5'
                          },
                          ParentReference: {
                            shape: 'Sf'
                          },
                          LinkName: {},
                          BatchReferenceName: {}
                        }
                      },
                      AttachObject: {
                        type: 'structure',
                        required: ['ParentReference', 'ChildReference', 'LinkName'],
                        members: {
                          ParentReference: {
                            shape: 'Sf'
                          },
                          ChildReference: {
                            shape: 'Sf'
                          },
                          LinkName: {}
                        }
                      },
                      DetachObject: {
                        type: 'structure',
                        required: ['ParentReference', 'LinkName'],
                        members: {
                          ParentReference: {
                            shape: 'Sf'
                          },
                          LinkName: {},
                          BatchReferenceName: {}
                        }
                      },
                      UpdateObjectAttributes: {
                        type: 'structure',
                        required: ['ObjectReference', 'AttributeUpdates'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          },
                          AttributeUpdates: {
                            shape: 'S2v'
                          }
                        }
                      },
                      DeleteObject: {
                        type: 'structure',
                        required: ['ObjectReference'],
                        members: {
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      AddFacetToObject: {
                        type: 'structure',
                        required: ['SchemaFacet', 'ObjectAttributeList', 'ObjectReference'],
                        members: {
                          SchemaFacet: {
                            shape: 'S3'
                          },
                          ObjectAttributeList: {
                            shape: 'S5'
                          },
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      RemoveFacetFromObject: {
                        type: 'structure',
                        required: ['SchemaFacet', 'ObjectReference'],
                        members: {
                          SchemaFacet: {
                            shape: 'S3'
                          },
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      AttachPolicy: {
                        type: 'structure',
                        required: ['PolicyReference', 'ObjectReference'],
                        members: {
                          PolicyReference: {
                            shape: 'Sf'
                          },
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      DetachPolicy: {
                        type: 'structure',
                        required: ['PolicyReference', 'ObjectReference'],
                        members: {
                          PolicyReference: {
                            shape: 'Sf'
                          },
                          ObjectReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      CreateIndex: {
                        type: 'structure',
                        required: ['OrderedIndexedAttributeList', 'IsUnique'],
                        members: {
                          OrderedIndexedAttributeList: {
                            shape: 'S35'
                          },
                          IsUnique: {
                            type: 'boolean'
                          },
                          ParentReference: {
                            shape: 'Sf'
                          },
                          LinkName: {},
                          BatchReferenceName: {}
                        }
                      },
                      AttachToIndex: {
                        type: 'structure',
                        required: ['IndexReference', 'TargetReference'],
                        members: {
                          IndexReference: {
                            shape: 'Sf'
                          },
                          TargetReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      DetachFromIndex: {
                        type: 'structure',
                        required: ['IndexReference', 'TargetReference'],
                        members: {
                          IndexReference: {
                            shape: 'Sf'
                          },
                          TargetReference: {
                            shape: 'Sf'
                          }
                        }
                      },
                      AttachTypedLink: {
                        type: 'structure',
                        required: ['SourceObjectReference', 'TargetObjectReference', 'TypedLinkFacet', 'Attributes'],
                        members: {
                          SourceObjectReference: {
                            shape: 'Sf'
                          },
                          TargetObjectReference: {
                            shape: 'Sf'
                          },
                          TypedLinkFacet: {
                            shape: 'St'
                          },
                          Attributes: {
                            shape: 'Sv'
                          }
                        }
                      },
                      DetachTypedLink: {
                        type: 'structure',
                        required: ['TypedLinkSpecifier'],
                        members: {
                          TypedLinkSpecifier: {
                            shape: 'Sy'
                          }
                        }
                      },
                      UpdateLinkAttributes: {
                        type: 'structure',
                        required: ['TypedLinkSpecifier', 'AttributeUpdates'],
                        members: {
                          TypedLinkSpecifier: {
                            shape: 'Sy'
                          },
                          AttributeUpdates: {
                            shape: 'S3c'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Responses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreateObject: {
                        type: 'structure',
                        members: {
                          ObjectIdentifier: {}
                        }
                      },
                      AttachObject: {
                        type: 'structure',
                        members: {
                          attachedObjectIdentifier: {}
                        }
                      },
                      DetachObject: {
                        type: 'structure',
                        members: {
                          detachedObjectIdentifier: {}
                        }
                      },
                      UpdateObjectAttributes: {
                        type: 'structure',
                        members: {
                          ObjectIdentifier: {}
                        }
                      },
                      DeleteObject: {
                        type: 'structure',
                        members: {}
                      },
                      AddFacetToObject: {
                        type: 'structure',
                        members: {}
                      },
                      RemoveFacetFromObject: {
                        type: 'structure',
                        members: {}
                      },
                      AttachPolicy: {
                        type: 'structure',
                        members: {}
                      },
                      DetachPolicy: {
                        type: 'structure',
                        members: {}
                      },
                      CreateIndex: {
                        type: 'structure',
                        members: {
                          ObjectIdentifier: {}
                        }
                      },
                      AttachToIndex: {
                        type: 'structure',
                        members: {
                          AttachedObjectIdentifier: {}
                        }
                      },
                      DetachFromIndex: {
                        type: 'structure',
                        members: {
                          DetachedObjectIdentifier: {}
                        }
                      },
                      AttachTypedLink: {
                        type: 'structure',
                        members: {
                          TypedLinkSpecifier: {
                            shape: 'Sy'
                          }
                        }
                      },
                      DetachTypedLink: {
                        type: 'structure',
                        members: {}
                      },
                      UpdateLinkAttributes: {
                        type: 'structure',
                        members: {}
                      }
                    }
                  }
                }
              }
            }
          },
          CreateDirectory: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/directory/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'SchemaArn'],
              members: {
                Name: {},
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DirectoryArn', 'Name', 'ObjectIdentifier', 'AppliedSchemaArn'],
              members: {
                DirectoryArn: {},
                Name: {},
                ObjectIdentifier: {},
                AppliedSchemaArn: {}
              }
            }
          },
          CreateFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/facet/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name', 'ObjectType'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {},
                Attributes: {
                  shape: 'S42'
                },
                ObjectType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateIndex: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/index',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'OrderedIndexedAttributeList', 'IsUnique'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                OrderedIndexedAttributeList: {
                  shape: 'S35'
                },
                IsUnique: {
                  type: 'boolean'
                },
                ParentReference: {
                  shape: 'Sf'
                },
                LinkName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectIdentifier: {}
              }
            }
          },
          CreateObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'SchemaFacets'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                SchemaFacets: {
                  shape: 'S1x'
                },
                ObjectAttributeList: {
                  shape: 'S5'
                },
                ParentReference: {
                  shape: 'Sf'
                },
                LinkName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectIdentifier: {}
              }
            }
          },
          CreateSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {}
              }
            }
          },
          CreateTypedLinkFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Facet'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Facet: {
                  type: 'structure',
                  required: ['Name', 'Attributes', 'IdentityAttributeOrder'],
                  members: {
                    Name: {},
                    Attributes: {
                      shape: 'S4q'
                    },
                    IdentityAttributeOrder: {
                      shape: 'S1a'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDirectory: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/directory',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {}
              }
            }
          },
          DeleteFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/facet/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {}
              }
            }
          },
          DeleteTypedLinkFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DetachFromIndex: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/index/detach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'IndexReference', 'TargetReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                IndexReference: {
                  shape: 'Sf'
                },
                TargetReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DetachedObjectIdentifier: {}
              }
            }
          },
          DetachObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/detach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ParentReference', 'LinkName'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ParentReference: {
                  shape: 'Sf'
                },
                LinkName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DetachedObjectIdentifier: {}
              }
            }
          },
          DetachPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/policy/detach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'PolicyReference', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                PolicyReference: {
                  shape: 'Sf'
                },
                ObjectReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DetachTypedLink: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/detach',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'TypedLinkSpecifier'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                TypedLinkSpecifier: {
                  shape: 'Sy'
                }
              }
            }
          },
          DisableDirectory: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/directory/disable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {}
              }
            }
          },
          EnableDirectory: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/directory/enable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {}
              }
            }
          },
          GetAppliedSchemaVersion: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/schema/getappliedschema',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn'],
              members: {
                SchemaArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppliedSchemaArn: {}
              }
            }
          },
          GetDirectory: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/directory/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Directory'],
              members: {
                Directory: {
                  shape: 'S5i'
                }
              }
            }
          },
          GetFacet: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/facet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Facet: {
                  type: 'structure',
                  members: {
                    Name: {},
                    ObjectType: {}
                  }
                }
              }
            }
          },
          GetLinkAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/attributes/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'TypedLinkSpecifier', 'AttributeNames'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                TypedLinkSpecifier: {
                  shape: 'Sy'
                },
                AttributeNames: {
                  shape: 'S1a'
                },
                ConsistencyLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S5'
                }
              }
            }
          },
          GetObjectAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/attributes/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference', 'SchemaFacet', 'AttributeNames'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                },
                SchemaFacet: {
                  shape: 'S3'
                },
                AttributeNames: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S5'
                }
              }
            }
          },
          GetObjectInformation: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/information',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaFacets: {
                  shape: 'S1x'
                },
                ObjectIdentifier: {}
              }
            }
          },
          GetSchemaAsJson: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/schema/json',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Document: {}
              }
            }
          },
          GetTypedLinkFacetInformation: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityAttributeOrder: {
                  shape: 'S1a'
                }
              }
            }
          },
          ListAppliedSchemaArns: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/schema/applied',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn'],
              members: {
                DirectoryArn: {},
                SchemaArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArns: {
                  shape: 'S61'
                },
                NextToken: {}
              }
            }
          },
          ListAttachedIndices: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/indices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'TargetReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                TargetReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IndexAttachments: {
                  shape: 'S20'
                },
                NextToken: {}
              }
            }
          },
          ListDevelopmentSchemaArns: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/schema/development',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArns: {
                  shape: 'S61'
                },
                NextToken: {}
              }
            }
          },
          ListDirectories: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/directory/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                state: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Directories'],
              members: {
                Directories: {
                  type: 'list',
                  member: {
                    shape: 'S5i'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFacetAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/facet/attributes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S42'
                },
                NextToken: {}
              }
            }
          },
          ListFacetNames: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/facet/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FacetNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListIncomingTypedLinks: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/incoming',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                FilterAttributeRanges: {
                  shape: 'S1k'
                },
                FilterTypedLink: {
                  shape: 'St'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LinkSpecifiers: {
                  shape: 'S2h'
                },
                NextToken: {}
              }
            }
          },
          ListIndex: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/index/targets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'IndexReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                RangesOnIndexedValues: {
                  shape: 'S1f'
                },
                IndexReference: {
                  shape: 'Sf'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IndexAttachments: {
                  shape: 'S20'
                },
                NextToken: {}
              }
            }
          },
          ListObjectAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/attributes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                },
                FacetFilter: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S5'
                },
                NextToken: {}
              }
            }
          },
          ListObjectChildren: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/children',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Children: {
                  shape: 'S1v'
                },
                NextToken: {}
              }
            }
          },
          ListObjectParentPaths: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/parentpaths',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PathToObjectIdentifiersList: {
                  shape: 'S23'
                },
                NextToken: {}
              }
            }
          },
          ListObjectParents: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/parent',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Parents: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                NextToken: {}
              }
            }
          },
          ListObjectPolicies: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/object/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AttachedPolicyIds: {
                  shape: 'S26'
                },
                NextToken: {}
              }
            }
          },
          ListOutgoingTypedLinks: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/outgoing',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                FilterAttributeRanges: {
                  shape: 'S1k'
                },
                FilterTypedLink: {
                  shape: 'St'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TypedLinkSpecifiers: {
                  shape: 'S2h'
                },
                NextToken: {}
              }
            }
          },
          ListPolicyAttachments: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/policy/attachment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'PolicyReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                PolicyReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ConsistencyLevel: {
                  location: 'header',
                  locationName: 'x-amz-consistency-level'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectIdentifiers: {
                  shape: 'S26'
                },
                NextToken: {}
              }
            }
          },
          ListPublishedSchemaArns: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/schema/published',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SchemaArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArns: {
                  shape: 'S61'
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S72'
                },
                NextToken: {}
              }
            }
          },
          ListTypedLinkFacetAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S4q'
                },
                NextToken: {}
              }
            }
          },
          ListTypedLinkFacetNames: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FacetNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          LookupPolicy: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/policy/lookup',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyToPathList: {
                  shape: 'S2a'
                },
                NextToken: {}
              }
            }
          },
          PublishSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/publish',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DevelopmentSchemaArn', 'Version'],
              members: {
                DevelopmentSchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Version: {},
                MinorVersion: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PublishedSchemaArn: {}
              }
            }
          },
          PutSchemaFromJson: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/json',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Document'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Document: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          RemoveFacetFromObject: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/facets/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'SchemaFacet', 'ObjectReference'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                SchemaFacet: {
                  shape: 'S3'
                },
                ObjectReference: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/tags/add',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S72'
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
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/tags/remove',
              responseCode: 200
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
          },
          UpdateFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/facet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {},
                AttributeUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Attribute: {
                        shape: 'S43'
                      },
                      Action: {}
                    }
                  }
                },
                ObjectType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLinkAttributes: {
            http: {
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/attributes/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'TypedLinkSpecifier', 'AttributeUpdates'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                TypedLinkSpecifier: {
                  shape: 'Sy'
                },
                AttributeUpdates: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateObjectAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/object/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryArn', 'ObjectReference', 'AttributeUpdates'],
              members: {
                DirectoryArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                ObjectReference: {
                  shape: 'Sf'
                },
                AttributeUpdates: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectIdentifier: {}
              }
            }
          },
          UpdateSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaArn: {}
              }
            }
          },
          UpdateTypedLinkFacet: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/typedlink/facet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SchemaArn', 'Name', 'AttributeUpdates', 'IdentityAttributeOrder'],
              members: {
                SchemaArn: {
                  location: 'header',
                  locationName: 'x-amz-data-partition'
                },
                Name: {},
                AttributeUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Attribute', 'Action'],
                    members: {
                      Attribute: {
                        shape: 'S4r'
                      },
                      Action: {}
                    }
                  }
                },
                IdentityAttributeOrder: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpgradeAppliedSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/upgradeapplied',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PublishedSchemaArn', 'DirectoryArn'],
              members: {
                PublishedSchemaArn: {},
                DirectoryArn: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpgradedSchemaArn: {},
                DirectoryArn: {}
              }
            }
          },
          UpgradePublishedSchema: {
            http: {
              method: 'PUT',
              requestUri: '/amazonclouddirectory/2017-01-11/schema/upgradepublished',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DevelopmentSchemaArn', 'PublishedSchemaArn', 'MinorVersion'],
              members: {
                DevelopmentSchemaArn: {},
                PublishedSchemaArn: {},
                MinorVersion: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpgradedSchemaArn: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              SchemaArn: {},
              FacetName: {}
            }
          },
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'S7'
                },
                Value: {
                  shape: 'S9'
                }
              }
            }
          },
          S7: {
            type: 'structure',
            required: ['SchemaArn', 'FacetName', 'Name'],
            members: {
              SchemaArn: {},
              FacetName: {},
              Name: {}
            }
          },
          S9: {
            type: 'structure',
            members: {
              StringValue: {},
              BinaryValue: {
                type: 'blob'
              },
              BooleanValue: {
                type: 'boolean'
              },
              NumberValue: {},
              DatetimeValue: {
                type: 'timestamp'
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              Selector: {}
            }
          },
          St: {
            type: 'structure',
            required: ['SchemaArn', 'TypedLinkName'],
            members: {
              SchemaArn: {},
              TypedLinkName: {}
            }
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AttributeName', 'Value'],
              members: {
                AttributeName: {},
                Value: {
                  shape: 'S9'
                }
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['TypedLinkFacet', 'SourceObjectReference', 'TargetObjectReference', 'IdentityAttributeValues'],
            members: {
              TypedLinkFacet: {
                shape: 'St'
              },
              SourceObjectReference: {
                shape: 'Sf'
              },
              TargetObjectReference: {
                shape: 'Sf'
              },
              IdentityAttributeValues: {
                shape: 'Sv'
              }
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AttributeKey: {
                  shape: 'S7'
                },
                Range: {
                  shape: 'S1h'
                }
              }
            }
          },
          S1h: {
            type: 'structure',
            required: ['StartMode', 'EndMode'],
            members: {
              StartMode: {},
              StartValue: {
                shape: 'S9'
              },
              EndMode: {},
              EndValue: {
                shape: 'S9'
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Range'],
              members: {
                AttributeName: {},
                Range: {
                  shape: 'S1h'
                }
              }
            }
          },
          S1v: {
            type: 'map',
            key: {},
            value: {}
          },
          S1x: {
            type: 'list',
            member: {
              shape: 'S3'
            }
          },
          S20: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                IndexedAttributes: {
                  shape: 'S5'
                },
                ObjectIdentifier: {}
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Path: {},
                ObjectIdentifiers: {
                  shape: 'S26'
                }
              }
            }
          },
          S26: {
            type: 'list',
            member: {}
          },
          S2a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Path: {},
                Policies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyId: {},
                      ObjectIdentifier: {},
                      PolicyType: {}
                    }
                  }
                }
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              shape: 'Sy'
            }
          },
          S2v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ObjectAttributeKey: {
                  shape: 'S7'
                },
                ObjectAttributeAction: {
                  type: 'structure',
                  members: {
                    ObjectAttributeActionType: {},
                    ObjectAttributeUpdateValue: {
                      shape: 'S9'
                    }
                  }
                }
              }
            }
          },
          S35: {
            type: 'list',
            member: {
              shape: 'S7'
            }
          },
          S3c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AttributeKey: {
                  shape: 'S7'
                },
                AttributeAction: {
                  type: 'structure',
                  members: {
                    AttributeActionType: {},
                    AttributeUpdateValue: {
                      shape: 'S9'
                    }
                  }
                }
              }
            }
          },
          S42: {
            type: 'list',
            member: {
              shape: 'S43'
            }
          },
          S43: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              AttributeDefinition: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {},
                  DefaultValue: {
                    shape: 'S9'
                  },
                  IsImmutable: {
                    type: 'boolean'
                  },
                  Rules: {
                    shape: 'S46'
                  }
                }
              },
              AttributeReference: {
                type: 'structure',
                required: ['TargetFacetName', 'TargetAttributeName'],
                members: {
                  TargetFacetName: {},
                  TargetAttributeName: {}
                }
              },
              RequiredBehavior: {}
            }
          },
          S46: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Type: {},
                Parameters: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S4q: {
            type: 'list',
            member: {
              shape: 'S4r'
            }
          },
          S4r: {
            type: 'structure',
            required: ['Name', 'Type', 'RequiredBehavior'],
            members: {
              Name: {},
              Type: {},
              DefaultValue: {
                shape: 'S9'
              },
              IsImmutable: {
                type: 'boolean'
              },
              Rules: {
                shape: 'S46'
              },
              RequiredBehavior: {}
            }
          },
          S5i: {
            type: 'structure',
            members: {
              Name: {},
              DirectoryArn: {},
              State: {},
              CreationDateTime: {
                type: 'timestamp'
              }
            }
          },
          S61: {
            type: 'list',
            member: {}
          },
          S72: {
            type: 'list',
            member: {
              type: 'structure',
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
//# sourceMappingURL=a9ada5c0cab2cd8bdf066b9cfc38b765286e8872.js.map