System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-11-27',
          endpointPrefix: 'resource-groups',
          protocol: 'rest-json',
          serviceAbbreviation: 'Resource Groups',
          serviceFullName: 'AWS Resource Groups',
          serviceId: 'Resource Groups',
          signatureVersion: 'v4',
          signingName: 'resource-groups',
          uid: 'resource-groups-2017-11-27'
        },
        operations: {
          CreateGroup: {
            http: {
              requestUri: '/groups'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                ResourceQuery: {
                  shape: 'S4'
                },
                Tags: {
                  shape: 'S7'
                },
                Configuration: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Sj'
                },
                ResourceQuery: {
                  shape: 'S4'
                },
                Tags: {
                  shape: 'S7'
                },
                GroupConfiguration: {
                  shape: 'Sl'
                }
              }
            }
          },
          DeleteGroup: {
            http: {
              requestUri: '/delete-group'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetAccountSettings: {
            http: {
              requestUri: '/get-account-settings'
            },
            output: {
              type: 'structure',
              members: {
                AccountSettings: {
                  shape: 'Ss'
                }
              }
            }
          },
          GetGroup: {
            http: {
              requestUri: '/get-group'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetGroupConfiguration: {
            http: {
              requestUri: '/get-group-configuration'
            },
            input: {
              type: 'structure',
              members: {
                Group: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupConfiguration: {
                  shape: 'Sl'
                }
              }
            }
          },
          GetGroupQuery: {
            http: {
              requestUri: '/get-group-query'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupQuery: {
                  shape: 'S12'
                }
              }
            }
          },
          GetTags: {
            http: {
              method: 'GET',
              requestUri: '/resources/{Arn}/tags'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Tags: {
                  shape: 'S7'
                }
              }
            }
          },
          GroupResources: {
            http: {
              requestUri: '/group-resources'
            },
            input: {
              type: 'structure',
              required: ['Group', 'ResourceArns'],
              members: {
                Group: {},
                ResourceArns: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Succeeded: {
                  shape: 'S16'
                },
                Failed: {
                  shape: 'S19'
                },
                Pending: {
                  shape: 'S1d'
                }
              }
            }
          },
          ListGroupResources: {
            http: {
              requestUri: '/list-group-resources'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                Resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Identifier: {
                        shape: 'S1q'
                      },
                      Status: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    }
                  }
                },
                ResourceIdentifiers: {
                  shape: 'S1u',
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Resources instead.'
                },
                NextToken: {},
                QueryErrors: {
                  shape: 'S1v'
                }
              }
            }
          },
          ListGroups: {
            http: {
              requestUri: '/groups-list'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupName: {},
                      GroupArn: {}
                    }
                  }
                },
                Groups: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use GroupIdentifiers instead.',
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                },
                NextToken: {}
              }
            }
          },
          PutGroupConfiguration: {
            http: {
              requestUri: '/put-group-configuration',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Group: {},
                Configuration: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchResources: {
            http: {
              requestUri: '/resources/search'
            },
            input: {
              type: 'structure',
              required: ['ResourceQuery'],
              members: {
                ResourceQuery: {
                  shape: 'S4'
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
                ResourceIdentifiers: {
                  shape: 'S1u'
                },
                NextToken: {},
                QueryErrors: {
                  shape: 'S1v'
                }
              }
            }
          },
          Tag: {
            http: {
              method: 'PUT',
              requestUri: '/resources/{Arn}/tags'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Tags'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Tags: {
                  shape: 'S7'
                }
              }
            }
          },
          UngroupResources: {
            http: {
              requestUri: '/ungroup-resources'
            },
            input: {
              type: 'structure',
              required: ['Group', 'ResourceArns'],
              members: {
                Group: {},
                ResourceArns: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Succeeded: {
                  shape: 'S16'
                },
                Failed: {
                  shape: 'S19'
                },
                Pending: {
                  shape: 'S1d'
                }
              }
            }
          },
          Untag: {
            http: {
              method: 'PATCH',
              requestUri: '/resources/{Arn}/tags'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Keys'],
              members: {
                Arn: {
                  location: 'uri',
                  locationName: 'Arn'
                },
                Keys: {
                  shape: 'S2i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Keys: {
                  shape: 'S2i'
                }
              }
            }
          },
          UpdateAccountSettings: {
            http: {
              requestUri: '/update-account-settings'
            },
            input: {
              type: 'structure',
              members: {
                GroupLifecycleEventsDesiredStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountSettings: {
                  shape: 'Ss'
                }
              }
            }
          },
          UpdateGroup: {
            http: {
              requestUri: '/update-group'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Sj'
                }
              }
            }
          },
          UpdateGroupQuery: {
            http: {
              requestUri: '/update-group-query'
            },
            input: {
              type: 'structure',
              required: ['ResourceQuery'],
              members: {
                GroupName: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use Group instead.'
                },
                Group: {},
                ResourceQuery: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupQuery: {
                  shape: 'S12'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['Type', 'Query'],
            members: {
              Type: {},
              Query: {}
            }
          },
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {},
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['GroupArn', 'Name'],
            members: {
              GroupArn: {},
              Name: {},
              Description: {}
            }
          },
          Sl: {
            type: 'structure',
            members: {
              Configuration: {
                shape: 'Sa'
              },
              ProposedConfiguration: {
                shape: 'Sa'
              },
              Status: {},
              FailureReason: {}
            }
          },
          Ss: {
            type: 'structure',
            members: {
              GroupLifecycleEventsDesiredStatus: {},
              GroupLifecycleEventsStatus: {},
              GroupLifecycleEventsStatusMessage: {}
            }
          },
          S12: {
            type: 'structure',
            required: ['GroupName', 'ResourceQuery'],
            members: {
              GroupName: {},
              ResourceQuery: {
                shape: 'S4'
              }
            }
          },
          S16: {
            type: 'list',
            member: {}
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ErrorMessage: {},
                ErrorCode: {}
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceArn: {}
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              ResourceArn: {},
              ResourceType: {}
            }
          },
          S1u: {
            type: 'list',
            member: {
              shape: 'S1q'
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ErrorCode: {},
                Message: {}
              }
            }
          },
          S2i: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ca328760202ca1c4eadaac292d06d652b6cfbde6.js.map