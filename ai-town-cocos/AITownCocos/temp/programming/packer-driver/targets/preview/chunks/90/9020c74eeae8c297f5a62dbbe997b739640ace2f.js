System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-01-26',
          endpointPrefix: 'tagging',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Resource Groups Tagging API',
          serviceId: 'Resource Groups Tagging API',
          signatureVersion: 'v4',
          targetPrefix: 'ResourceGroupsTaggingAPI_20170126',
          uid: 'resourcegroupstaggingapi-2017-01-26'
        },
        operations: {
          DescribeReportCreation: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                S3Location: {},
                ErrorMessage: {}
              }
            }
          },
          GetComplianceSummary: {
            input: {
              type: 'structure',
              members: {
                TargetIdFilters: {
                  type: 'list',
                  member: {}
                },
                RegionFilters: {
                  type: 'list',
                  member: {}
                },
                ResourceTypeFilters: {
                  shape: 'Sb'
                },
                TagKeyFilters: {
                  type: 'list',
                  member: {}
                },
                GroupBy: {
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  type: 'integer'
                },
                PaginationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LastUpdated: {},
                      TargetId: {},
                      TargetIdType: {},
                      Region: {},
                      ResourceType: {},
                      NonCompliantResources: {
                        type: 'long'
                      }
                    }
                  }
                },
                PaginationToken: {}
              }
            }
          },
          GetResources: {
            input: {
              type: 'structure',
              members: {
                PaginationToken: {},
                TagFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                ResourcesPerPage: {
                  type: 'integer'
                },
                TagsPerPage: {
                  type: 'integer'
                },
                ResourceTypeFilters: {
                  shape: 'Sb'
                },
                IncludeComplianceDetails: {
                  type: 'boolean'
                },
                ExcludeCompliantResources: {
                  type: 'boolean'
                },
                ResourceARNList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PaginationToken: {},
                ResourceTagMappingList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceARN: {},
                      Tags: {
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
                      ComplianceDetails: {
                        type: 'structure',
                        members: {
                          NoncompliantKeys: {
                            shape: 'S16'
                          },
                          KeysWithNoncompliantValues: {
                            shape: 'S16'
                          },
                          ComplianceStatus: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetTagKeys: {
            input: {
              type: 'structure',
              members: {
                PaginationToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PaginationToken: {},
                TagKeys: {
                  shape: 'S16'
                }
              }
            }
          },
          GetTagValues: {
            input: {
              type: 'structure',
              required: ['Key'],
              members: {
                PaginationToken: {},
                Key: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PaginationToken: {},
                TagValues: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          StartReportCreation: {
            input: {
              type: 'structure',
              required: ['S3Bucket'],
              members: {
                S3Bucket: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResources: {
            input: {
              type: 'structure',
              required: ['ResourceARNList', 'Tags'],
              members: {
                ResourceARNList: {
                  shape: 'S1h'
                },
                Tags: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedResourcesMap: {
                  shape: 'S1k'
                }
              }
            }
          },
          UntagResources: {
            input: {
              type: 'structure',
              required: ['ResourceARNList', 'TagKeys'],
              members: {
                ResourceARNList: {
                  shape: 'S1h'
                },
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedResourcesMap: {
                  shape: 'S1k'
                }
              }
            }
          }
        },
        shapes: {
          Sb: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                StatusCode: {
                  type: 'integer'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9020c74eeae8c297f5a62dbbe997b739640ace2f.js.map