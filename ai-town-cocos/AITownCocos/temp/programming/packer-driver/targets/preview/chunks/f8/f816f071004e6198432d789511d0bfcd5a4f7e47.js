System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-24',
          endpointPrefix: 'managedblockchain',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'ManagedBlockchain',
          serviceFullName: 'Amazon Managed Blockchain',
          serviceId: 'ManagedBlockchain',
          signatureVersion: 'v4',
          signingName: 'managedblockchain',
          uid: 'managedblockchain-2018-09-24'
        },
        operations: {
          CreateAccessor: {
            http: {
              requestUri: '/accessors'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'AccessorType'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                AccessorType: {},
                Tags: {
                  shape: 'S4'
                },
                NetworkType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessorId: {},
                BillingToken: {},
                NetworkType: {}
              }
            }
          },
          CreateMember: {
            http: {
              requestUri: '/networks/{networkId}/members'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'InvitationId', 'NetworkId', 'MemberConfiguration'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                InvitationId: {},
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberConfiguration: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MemberId: {}
              }
            }
          },
          CreateNetwork: {
            http: {
              requestUri: '/networks'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'Name', 'Framework', 'FrameworkVersion', 'VotingPolicy', 'MemberConfiguration'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Name: {},
                Description: {},
                Framework: {},
                FrameworkVersion: {},
                FrameworkConfiguration: {
                  type: 'structure',
                  members: {
                    Fabric: {
                      type: 'structure',
                      required: ['Edition'],
                      members: {
                        Edition: {}
                      }
                    }
                  }
                },
                VotingPolicy: {
                  shape: 'Sx'
                },
                MemberConfiguration: {
                  shape: 'Sc'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NetworkId: {},
                MemberId: {}
              }
            }
          },
          CreateNode: {
            http: {
              requestUri: '/networks/{networkId}/nodes'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'NetworkId', 'NodeConfiguration'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {},
                NodeConfiguration: {
                  type: 'structure',
                  required: ['InstanceType'],
                  members: {
                    InstanceType: {},
                    AvailabilityZone: {},
                    LogPublishingConfiguration: {
                      shape: 'S17'
                    },
                    StateDB: {}
                  }
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NodeId: {}
              }
            }
          },
          CreateProposal: {
            http: {
              requestUri: '/networks/{networkId}/proposals'
            },
            input: {
              type: 'structure',
              required: ['ClientRequestToken', 'NetworkId', 'MemberId', 'Actions'],
              members: {
                ClientRequestToken: {
                  idempotencyToken: true
                },
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {},
                Actions: {
                  shape: 'S1c'
                },
                Description: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProposalId: {}
              }
            }
          },
          DeleteAccessor: {
            http: {
              method: 'DELETE',
              requestUri: '/accessors/{AccessorId}'
            },
            input: {
              type: 'structure',
              required: ['AccessorId'],
              members: {
                AccessorId: {
                  location: 'uri',
                  locationName: 'AccessorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMember: {
            http: {
              method: 'DELETE',
              requestUri: '/networks/{networkId}/members/{memberId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'MemberId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'memberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteNode: {
            http: {
              method: 'DELETE',
              requestUri: '/networks/{networkId}/nodes/{nodeId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'NodeId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'querystring',
                  locationName: 'memberId'
                },
                NodeId: {
                  location: 'uri',
                  locationName: 'nodeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccessor: {
            http: {
              method: 'GET',
              requestUri: '/accessors/{AccessorId}'
            },
            input: {
              type: 'structure',
              required: ['AccessorId'],
              members: {
                AccessorId: {
                  location: 'uri',
                  locationName: 'AccessorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accessor: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Type: {},
                    BillingToken: {},
                    Status: {},
                    CreationDate: {
                      shape: 'S1t'
                    },
                    Arn: {},
                    Tags: {
                      shape: 'S1u'
                    },
                    NetworkType: {}
                  }
                }
              }
            }
          },
          GetMember: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/members/{memberId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'MemberId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'memberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Member: {
                  type: 'structure',
                  members: {
                    NetworkId: {},
                    Id: {},
                    Name: {},
                    Description: {},
                    FrameworkAttributes: {
                      type: 'structure',
                      members: {
                        Fabric: {
                          type: 'structure',
                          members: {
                            AdminUsername: {},
                            CaEndpoint: {}
                          }
                        }
                      }
                    },
                    LogPublishingConfiguration: {
                      shape: 'Sj'
                    },
                    Status: {},
                    CreationDate: {
                      shape: 'S1t'
                    },
                    Tags: {
                      shape: 'S1u'
                    },
                    Arn: {},
                    KmsKeyArn: {}
                  }
                }
              }
            }
          },
          GetNetwork: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Network: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {},
                    Description: {},
                    Framework: {},
                    FrameworkVersion: {},
                    FrameworkAttributes: {
                      type: 'structure',
                      members: {
                        Fabric: {
                          type: 'structure',
                          members: {
                            OrderingServiceEndpoint: {},
                            Edition: {}
                          }
                        },
                        Ethereum: {
                          type: 'structure',
                          members: {
                            ChainId: {}
                          }
                        }
                      }
                    },
                    VpcEndpointServiceName: {},
                    VotingPolicy: {
                      shape: 'Sx'
                    },
                    Status: {},
                    CreationDate: {
                      shape: 'S1t'
                    },
                    Tags: {
                      shape: 'S1u'
                    },
                    Arn: {}
                  }
                }
              }
            }
          },
          GetNode: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/nodes/{nodeId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'NodeId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'querystring',
                  locationName: 'memberId'
                },
                NodeId: {
                  location: 'uri',
                  locationName: 'nodeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Node: {
                  type: 'structure',
                  members: {
                    NetworkId: {},
                    MemberId: {},
                    Id: {},
                    InstanceType: {},
                    AvailabilityZone: {},
                    FrameworkAttributes: {
                      type: 'structure',
                      members: {
                        Fabric: {
                          type: 'structure',
                          members: {
                            PeerEndpoint: {},
                            PeerEventEndpoint: {}
                          }
                        },
                        Ethereum: {
                          type: 'structure',
                          members: {
                            HttpEndpoint: {},
                            WebSocketEndpoint: {}
                          }
                        }
                      }
                    },
                    LogPublishingConfiguration: {
                      shape: 'S17'
                    },
                    StateDB: {},
                    Status: {},
                    CreationDate: {
                      shape: 'S1t'
                    },
                    Tags: {
                      shape: 'S1u'
                    },
                    Arn: {},
                    KmsKeyArn: {}
                  }
                }
              }
            }
          },
          GetProposal: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/proposals/{proposalId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'ProposalId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                ProposalId: {
                  location: 'uri',
                  locationName: 'proposalId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Proposal: {
                  type: 'structure',
                  members: {
                    ProposalId: {},
                    NetworkId: {},
                    Description: {},
                    Actions: {
                      shape: 'S1c'
                    },
                    ProposedByMemberId: {},
                    ProposedByMemberName: {},
                    Status: {},
                    CreationDate: {
                      shape: 'S1t'
                    },
                    ExpirationDate: {
                      shape: 'S1t'
                    },
                    YesVoteCount: {
                      type: 'integer'
                    },
                    NoVoteCount: {
                      type: 'integer'
                    },
                    OutstandingVoteCount: {
                      type: 'integer'
                    },
                    Tags: {
                      shape: 'S1u'
                    },
                    Arn: {}
                  }
                }
              }
            }
          },
          ListAccessors: {
            http: {
              method: 'GET',
              requestUri: '/accessors'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                NetworkType: {
                  location: 'querystring',
                  locationName: 'networkType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accessors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {},
                      Status: {},
                      CreationDate: {
                        shape: 'S1t'
                      },
                      Arn: {},
                      NetworkType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInvitations: {
            http: {
              method: 'GET',
              requestUri: '/invitations'
            },
            input: {
              type: 'structure',
              members: {
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
                Invitations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InvitationId: {},
                      CreationDate: {
                        shape: 'S1t'
                      },
                      ExpirationDate: {
                        shape: 'S1t'
                      },
                      Status: {},
                      NetworkSummary: {
                        shape: 'S2x'
                      },
                      Arn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMembers: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/members'
            },
            input: {
              type: 'structure',
              required: ['NetworkId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                IsOwned: {
                  location: 'querystring',
                  locationName: 'isOwned',
                  type: 'boolean'
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
                Members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Description: {},
                      Status: {},
                      CreationDate: {
                        shape: 'S1t'
                      },
                      IsOwned: {
                        type: 'boolean'
                      },
                      Arn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNetworks: {
            http: {
              method: 'GET',
              requestUri: '/networks'
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                Framework: {
                  location: 'querystring',
                  locationName: 'framework'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
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
                Networks: {
                  type: 'list',
                  member: {
                    shape: 'S2x'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNodes: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/nodes'
            },
            input: {
              type: 'structure',
              required: ['NetworkId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'querystring',
                  locationName: 'memberId'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
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
                Nodes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Status: {},
                      CreationDate: {
                        shape: 'S1t'
                      },
                      AvailabilityZone: {},
                      InstanceType: {},
                      Arn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProposalVotes: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/proposals/{proposalId}/votes'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'ProposalId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                ProposalId: {
                  location: 'uri',
                  locationName: 'proposalId'
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
                ProposalVotes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Vote: {},
                      MemberName: {},
                      MemberId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProposals: {
            http: {
              method: 'GET',
              requestUri: '/networks/{networkId}/proposals'
            },
            input: {
              type: 'structure',
              required: ['NetworkId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
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
                Proposals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProposalId: {},
                      Description: {},
                      ProposedByMemberId: {},
                      ProposedByMemberName: {},
                      Status: {},
                      CreationDate: {
                        shape: 'S1t'
                      },
                      ExpirationDate: {
                        shape: 'S1t'
                      },
                      Arn: {}
                    }
                  }
                },
                NextToken: {}
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
                  shape: 'S1u'
                }
              }
            }
          },
          RejectInvitation: {
            http: {
              method: 'DELETE',
              requestUri: '/invitations/{invitationId}'
            },
            input: {
              type: 'structure',
              required: ['InvitationId'],
              members: {
                InvitationId: {
                  location: 'uri',
                  locationName: 'invitationId'
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
                  shape: 'S4'
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
          UpdateMember: {
            http: {
              method: 'PATCH',
              requestUri: '/networks/{networkId}/members/{memberId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'MemberId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'memberId'
                },
                LogPublishingConfiguration: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNode: {
            http: {
              method: 'PATCH',
              requestUri: '/networks/{networkId}/nodes/{nodeId}'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'NodeId'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                MemberId: {},
                NodeId: {
                  location: 'uri',
                  locationName: 'nodeId'
                },
                LogPublishingConfiguration: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          VoteOnProposal: {
            http: {
              requestUri: '/networks/{networkId}/proposals/{proposalId}/votes'
            },
            input: {
              type: 'structure',
              required: ['NetworkId', 'ProposalId', 'VoterMemberId', 'Vote'],
              members: {
                NetworkId: {
                  location: 'uri',
                  locationName: 'networkId'
                },
                ProposalId: {
                  location: 'uri',
                  locationName: 'proposalId'
                },
                VoterMemberId: {},
                Vote: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          Sc: {
            type: 'structure',
            required: ['Name', 'FrameworkConfiguration'],
            members: {
              Name: {},
              Description: {},
              FrameworkConfiguration: {
                type: 'structure',
                members: {
                  Fabric: {
                    type: 'structure',
                    required: ['AdminUsername', 'AdminPassword'],
                    members: {
                      AdminUsername: {},
                      AdminPassword: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                }
              },
              LogPublishingConfiguration: {
                shape: 'Sj'
              },
              Tags: {
                shape: 'S4'
              },
              KmsKeyArn: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              Fabric: {
                type: 'structure',
                members: {
                  CaLogs: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          Sl: {
            type: 'structure',
            members: {
              Cloudwatch: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              ApprovalThresholdPolicy: {
                type: 'structure',
                members: {
                  ThresholdPercentage: {
                    type: 'integer'
                  },
                  ProposalDurationInHours: {
                    type: 'integer'
                  },
                  ThresholdComparator: {}
                }
              }
            }
          },
          S17: {
            type: 'structure',
            members: {
              Fabric: {
                type: 'structure',
                members: {
                  ChaincodeLogs: {
                    shape: 'Sl'
                  },
                  PeerLogs: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          S1c: {
            type: 'structure',
            members: {
              Invitations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Principal'],
                  members: {
                    Principal: {}
                  }
                }
              },
              Removals: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['MemberId'],
                  members: {
                    MemberId: {}
                  }
                }
              }
            }
          },
          S1t: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1u: {
            type: 'map',
            key: {},
            value: {}
          },
          S2x: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {},
              Framework: {},
              FrameworkVersion: {},
              Status: {},
              CreationDate: {
                shape: 'S1t'
              },
              Arn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f816f071004e6198432d789511d0bfcd5a4f7e47.js.map