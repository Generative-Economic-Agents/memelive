System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-01-12',
          endpointPrefix: 'dlm',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon DLM',
          serviceFullName: 'Amazon Data Lifecycle Manager',
          serviceId: 'DLM',
          signatureVersion: 'v4',
          signingName: 'dlm',
          uid: 'dlm-2018-01-12'
        },
        operations: {
          CreateLifecyclePolicy: {
            http: {
              requestUri: '/policies'
            },
            input: {
              type: 'structure',
              required: ['ExecutionRoleArn', 'Description', 'State'],
              members: {
                ExecutionRoleArn: {},
                Description: {},
                State: {},
                PolicyDetails: {
                  shape: 'S5'
                },
                Tags: {
                  shape: 'S2g'
                },
                DefaultPolicy: {},
                CreateInterval: {
                  type: 'integer'
                },
                RetainInterval: {
                  type: 'integer'
                },
                CopyTags: {
                  type: 'boolean'
                },
                ExtendDeletion: {
                  type: 'boolean'
                },
                CrossRegionCopyTargets: {
                  shape: 'S28'
                },
                Exclusions: {
                  shape: 'S2b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyId: {}
              }
            }
          },
          DeleteLifecyclePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/policies/{policyId}'
            },
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {
                  location: 'uri',
                  locationName: 'policyId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetLifecyclePolicies: {
            http: {
              method: 'GET',
              requestUri: '/policies'
            },
            input: {
              type: 'structure',
              members: {
                PolicyIds: {
                  location: 'querystring',
                  locationName: 'policyIds',
                  type: 'list',
                  member: {}
                },
                State: {
                  location: 'querystring',
                  locationName: 'state'
                },
                ResourceTypes: {
                  shape: 'S7',
                  location: 'querystring',
                  locationName: 'resourceTypes'
                },
                TargetTags: {
                  location: 'querystring',
                  locationName: 'targetTags',
                  type: 'list',
                  member: {}
                },
                TagsToAdd: {
                  location: 'querystring',
                  locationName: 'tagsToAdd',
                  type: 'list',
                  member: {}
                },
                DefaultPolicyType: {
                  location: 'querystring',
                  locationName: 'defaultPolicyType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyId: {},
                      Description: {},
                      State: {},
                      Tags: {
                        shape: 'S2g'
                      },
                      PolicyType: {},
                      DefaultPolicy: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          GetLifecyclePolicy: {
            http: {
              method: 'GET',
              requestUri: '/policies/{policyId}'
            },
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {
                  location: 'uri',
                  locationName: 'policyId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  type: 'structure',
                  members: {
                    PolicyId: {},
                    Description: {},
                    State: {},
                    StatusMessage: {},
                    ExecutionRoleArn: {},
                    DateCreated: {
                      shape: 'S33'
                    },
                    DateModified: {
                      shape: 'S33'
                    },
                    PolicyDetails: {
                      shape: 'S5'
                    },
                    Tags: {
                      shape: 'S2g'
                    },
                    PolicyArn: {},
                    DefaultPolicy: {
                      type: 'boolean'
                    }
                  }
                }
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2g'
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
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S2g'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
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
          UpdateLifecyclePolicy: {
            http: {
              method: 'PATCH',
              requestUri: '/policies/{policyId}'
            },
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {
                  location: 'uri',
                  locationName: 'policyId'
                },
                ExecutionRoleArn: {},
                State: {},
                Description: {},
                PolicyDetails: {
                  shape: 'S5'
                },
                CreateInterval: {
                  type: 'integer'
                },
                RetainInterval: {
                  type: 'integer'
                },
                CopyTags: {
                  type: 'boolean'
                },
                ExtendDeletion: {
                  type: 'boolean'
                },
                CrossRegionCopyTargets: {
                  shape: 'S28'
                },
                Exclusions: {
                  shape: 'S2b'
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
          S5: {
            type: 'structure',
            members: {
              PolicyType: {},
              ResourceTypes: {
                shape: 'S7'
              },
              ResourceLocations: {
                type: 'list',
                member: {}
              },
              TargetTags: {
                type: 'list',
                member: {
                  shape: 'Sc'
                }
              },
              Schedules: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    CopyTags: {
                      type: 'boolean'
                    },
                    TagsToAdd: {
                      type: 'list',
                      member: {
                        shape: 'Sc'
                      }
                    },
                    VariableTags: {
                      type: 'list',
                      member: {
                        shape: 'Sc'
                      }
                    },
                    CreateRule: {
                      type: 'structure',
                      members: {
                        Location: {},
                        Interval: {
                          type: 'integer'
                        },
                        IntervalUnit: {},
                        Times: {
                          type: 'list',
                          member: {}
                        },
                        CronExpression: {},
                        Scripts: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['ExecutionHandler'],
                            members: {
                              Stages: {
                                type: 'list',
                                member: {}
                              },
                              ExecutionHandlerService: {},
                              ExecutionHandler: {},
                              ExecuteOperationOnScriptFailure: {
                                type: 'boolean'
                              },
                              ExecutionTimeout: {
                                type: 'integer'
                              },
                              MaximumRetryCount: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    },
                    RetainRule: {
                      type: 'structure',
                      members: {
                        Count: {
                          type: 'integer'
                        },
                        Interval: {
                          type: 'integer'
                        },
                        IntervalUnit: {}
                      }
                    },
                    FastRestoreRule: {
                      type: 'structure',
                      required: ['AvailabilityZones'],
                      members: {
                        Count: {
                          type: 'integer'
                        },
                        Interval: {
                          type: 'integer'
                        },
                        IntervalUnit: {},
                        AvailabilityZones: {
                          type: 'list',
                          member: {}
                        }
                      }
                    },
                    CrossRegionCopyRules: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Encrypted'],
                        members: {
                          TargetRegion: {},
                          Target: {},
                          Encrypted: {
                            type: 'boolean'
                          },
                          CmkArn: {},
                          CopyTags: {
                            type: 'boolean'
                          },
                          RetainRule: {
                            shape: 'S1f'
                          },
                          DeprecateRule: {
                            type: 'structure',
                            members: {
                              Interval: {
                                type: 'integer'
                              },
                              IntervalUnit: {}
                            }
                          }
                        }
                      }
                    },
                    ShareRules: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['TargetAccounts'],
                        members: {
                          TargetAccounts: {
                            type: 'list',
                            member: {}
                          },
                          UnshareInterval: {
                            type: 'integer'
                          },
                          UnshareIntervalUnit: {}
                        }
                      }
                    },
                    DeprecateRule: {
                      type: 'structure',
                      members: {
                        Count: {
                          type: 'integer'
                        },
                        Interval: {
                          type: 'integer'
                        },
                        IntervalUnit: {}
                      }
                    },
                    ArchiveRule: {
                      type: 'structure',
                      required: ['RetainRule'],
                      members: {
                        RetainRule: {
                          type: 'structure',
                          required: ['RetentionArchiveTier'],
                          members: {
                            RetentionArchiveTier: {
                              type: 'structure',
                              members: {
                                Count: {
                                  type: 'integer'
                                },
                                Interval: {
                                  type: 'integer'
                                },
                                IntervalUnit: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              Parameters: {
                type: 'structure',
                members: {
                  ExcludeBootVolume: {
                    type: 'boolean'
                  },
                  NoReboot: {
                    type: 'boolean'
                  },
                  ExcludeDataVolumeTags: {
                    type: 'list',
                    member: {
                      shape: 'Sc'
                    }
                  }
                }
              },
              EventSource: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {},
                  Parameters: {
                    type: 'structure',
                    required: ['EventType', 'SnapshotOwner', 'DescriptionRegex'],
                    members: {
                      EventType: {},
                      SnapshotOwner: {
                        type: 'list',
                        member: {}
                      },
                      DescriptionRegex: {}
                    }
                  }
                }
              },
              Actions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'CrossRegionCopy'],
                  members: {
                    Name: {},
                    CrossRegionCopy: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Target', 'EncryptionConfiguration'],
                        members: {
                          Target: {},
                          EncryptionConfiguration: {
                            type: 'structure',
                            required: ['Encrypted'],
                            members: {
                              Encrypted: {
                                type: 'boolean'
                              },
                              CmkArn: {}
                            }
                          },
                          RetainRule: {
                            shape: 'S1f'
                          }
                        }
                      }
                    }
                  }
                }
              },
              PolicyLanguage: {},
              ResourceType: {},
              CreateInterval: {
                type: 'integer'
              },
              RetainInterval: {
                type: 'integer'
              },
              CopyTags: {
                type: 'boolean'
              },
              CrossRegionCopyTargets: {
                shape: 'S28'
              },
              ExtendDeletion: {
                type: 'boolean'
              },
              Exclusions: {
                shape: 'S2b'
              }
            }
          },
          S7: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          S1f: {
            type: 'structure',
            members: {
              Interval: {
                type: 'integer'
              },
              IntervalUnit: {}
            }
          },
          S28: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TargetRegion: {}
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              ExcludeBootVolumes: {
                type: 'boolean'
              },
              ExcludeVolumeTypes: {
                type: 'list',
                member: {}
              },
              ExcludeTags: {
                type: 'list',
                member: {
                  shape: 'Sc'
                }
              }
            }
          },
          S2g: {
            type: 'map',
            key: {},
            value: {}
          },
          S33: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0b81ec81173b41b438be8e8d0dc38653564ef5bc.js.map