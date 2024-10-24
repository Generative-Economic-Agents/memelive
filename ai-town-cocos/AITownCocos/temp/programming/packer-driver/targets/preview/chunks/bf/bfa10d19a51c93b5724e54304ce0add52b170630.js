System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-06-01',
          endpointPrefix: 'elasticloadbalancing',
          protocol: 'query',
          serviceFullName: 'Elastic Load Balancing',
          serviceId: 'Elastic Load Balancing',
          signatureVersion: 'v4',
          uid: 'elasticloadbalancing-2012-06-01',
          xmlNamespace: 'http://elasticloadbalancing.amazonaws.com/doc/2012-06-01/'
        },
        operations: {
          AddTags: {
            input: {
              type: 'structure',
              required: ['LoadBalancerNames', 'Tags'],
              members: {
                LoadBalancerNames: {
                  shape: 'S2'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              resultWrapper: 'AddTagsResult',
              type: 'structure',
              members: {}
            }
          },
          ApplySecurityGroupsToLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'SecurityGroups'],
              members: {
                LoadBalancerName: {},
                SecurityGroups: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              resultWrapper: 'ApplySecurityGroupsToLoadBalancerResult',
              type: 'structure',
              members: {
                SecurityGroups: {
                  shape: 'Sa'
                }
              }
            }
          },
          AttachLoadBalancerToSubnets: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Subnets'],
              members: {
                LoadBalancerName: {},
                Subnets: {
                  shape: 'Se'
                }
              }
            },
            output: {
              resultWrapper: 'AttachLoadBalancerToSubnetsResult',
              type: 'structure',
              members: {
                Subnets: {
                  shape: 'Se'
                }
              }
            }
          },
          ConfigureHealthCheck: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'HealthCheck'],
              members: {
                LoadBalancerName: {},
                HealthCheck: {
                  shape: 'Si'
                }
              }
            },
            output: {
              resultWrapper: 'ConfigureHealthCheckResult',
              type: 'structure',
              members: {
                HealthCheck: {
                  shape: 'Si'
                }
              }
            }
          },
          CreateAppCookieStickinessPolicy: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'PolicyName', 'CookieName'],
              members: {
                LoadBalancerName: {},
                PolicyName: {},
                CookieName: {}
              }
            },
            output: {
              resultWrapper: 'CreateAppCookieStickinessPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          CreateLBCookieStickinessPolicy: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'PolicyName'],
              members: {
                LoadBalancerName: {},
                PolicyName: {},
                CookieExpirationPeriod: {
                  type: 'long'
                }
              }
            },
            output: {
              resultWrapper: 'CreateLBCookieStickinessPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          CreateLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Listeners'],
              members: {
                LoadBalancerName: {},
                Listeners: {
                  shape: 'Sx'
                },
                AvailabilityZones: {
                  shape: 'S13'
                },
                Subnets: {
                  shape: 'Se'
                },
                SecurityGroups: {
                  shape: 'Sa'
                },
                Scheme: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              resultWrapper: 'CreateLoadBalancerResult',
              type: 'structure',
              members: {
                DNSName: {}
              }
            }
          },
          CreateLoadBalancerListeners: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Listeners'],
              members: {
                LoadBalancerName: {},
                Listeners: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              resultWrapper: 'CreateLoadBalancerListenersResult',
              type: 'structure',
              members: {}
            }
          },
          CreateLoadBalancerPolicy: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'PolicyName', 'PolicyTypeName'],
              members: {
                LoadBalancerName: {},
                PolicyName: {},
                PolicyTypeName: {},
                PolicyAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AttributeName: {},
                      AttributeValue: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'CreateLoadBalancerPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName'],
              members: {
                LoadBalancerName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteLoadBalancerResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteLoadBalancerListeners: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'LoadBalancerPorts'],
              members: {
                LoadBalancerName: {},
                LoadBalancerPorts: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                }
              }
            },
            output: {
              resultWrapper: 'DeleteLoadBalancerListenersResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteLoadBalancerPolicy: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'PolicyName'],
              members: {
                LoadBalancerName: {},
                PolicyName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteLoadBalancerPolicyResult',
              type: 'structure',
              members: {}
            }
          },
          DeregisterInstancesFromLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Instances'],
              members: {
                LoadBalancerName: {},
                Instances: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              resultWrapper: 'DeregisterInstancesFromLoadBalancerResult',
              type: 'structure',
              members: {
                Instances: {
                  shape: 'S1p'
                }
              }
            }
          },
          DescribeAccountLimits: {
            input: {
              type: 'structure',
              members: {
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAccountLimitsResult',
              type: 'structure',
              members: {
                Limits: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Max: {}
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeInstanceHealth: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName'],
              members: {
                LoadBalancerName: {},
                Instances: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeInstanceHealthResult',
              type: 'structure',
              members: {
                InstanceStates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceId: {},
                      State: {},
                      ReasonCode: {},
                      Description: {}
                    }
                  }
                }
              }
            }
          },
          DescribeLoadBalancerAttributes: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName'],
              members: {
                LoadBalancerName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancerAttributesResult',
              type: 'structure',
              members: {
                LoadBalancerAttributes: {
                  shape: 'S2a'
                }
              }
            }
          },
          DescribeLoadBalancerPolicies: {
            input: {
              type: 'structure',
              members: {
                LoadBalancerName: {},
                PolicyNames: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancerPoliciesResult',
              type: 'structure',
              members: {
                PolicyDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyName: {},
                      PolicyTypeName: {},
                      PolicyAttributeDescriptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AttributeName: {},
                            AttributeValue: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeLoadBalancerPolicyTypes: {
            input: {
              type: 'structure',
              members: {
                PolicyTypeNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancerPolicyTypesResult',
              type: 'structure',
              members: {
                PolicyTypeDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyTypeName: {},
                      Description: {},
                      PolicyAttributeTypeDescriptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AttributeName: {},
                            AttributeType: {},
                            Description: {},
                            DefaultValue: {},
                            Cardinality: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeLoadBalancers: {
            input: {
              type: 'structure',
              members: {
                LoadBalancerNames: {
                  shape: 'S2'
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancersResult',
              type: 'structure',
              members: {
                LoadBalancerDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LoadBalancerName: {},
                      DNSName: {},
                      CanonicalHostedZoneName: {},
                      CanonicalHostedZoneNameID: {},
                      ListenerDescriptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Listener: {
                              shape: 'Sy'
                            },
                            PolicyNames: {
                              shape: 'S2s'
                            }
                          }
                        }
                      },
                      Policies: {
                        type: 'structure',
                        members: {
                          AppCookieStickinessPolicies: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                PolicyName: {},
                                CookieName: {}
                              }
                            }
                          },
                          LBCookieStickinessPolicies: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                PolicyName: {},
                                CookieExpirationPeriod: {
                                  type: 'long'
                                }
                              }
                            }
                          },
                          OtherPolicies: {
                            shape: 'S2s'
                          }
                        }
                      },
                      BackendServerDescriptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            InstancePort: {
                              type: 'integer'
                            },
                            PolicyNames: {
                              shape: 'S2s'
                            }
                          }
                        }
                      },
                      AvailabilityZones: {
                        shape: 'S13'
                      },
                      Subnets: {
                        shape: 'Se'
                      },
                      VPCId: {},
                      Instances: {
                        shape: 'S1p'
                      },
                      HealthCheck: {
                        shape: 'Si'
                      },
                      SourceSecurityGroup: {
                        type: 'structure',
                        members: {
                          OwnerAlias: {},
                          GroupName: {}
                        }
                      },
                      SecurityGroups: {
                        shape: 'Sa'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Scheme: {}
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              required: ['LoadBalancerNames'],
              members: {
                LoadBalancerNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTagsResult',
              type: 'structure',
              members: {
                TagDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LoadBalancerName: {},
                      Tags: {
                        shape: 'S4'
                      }
                    }
                  }
                }
              }
            }
          },
          DetachLoadBalancerFromSubnets: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Subnets'],
              members: {
                LoadBalancerName: {},
                Subnets: {
                  shape: 'Se'
                }
              }
            },
            output: {
              resultWrapper: 'DetachLoadBalancerFromSubnetsResult',
              type: 'structure',
              members: {
                Subnets: {
                  shape: 'Se'
                }
              }
            }
          },
          DisableAvailabilityZonesForLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'AvailabilityZones'],
              members: {
                LoadBalancerName: {},
                AvailabilityZones: {
                  shape: 'S13'
                }
              }
            },
            output: {
              resultWrapper: 'DisableAvailabilityZonesForLoadBalancerResult',
              type: 'structure',
              members: {
                AvailabilityZones: {
                  shape: 'S13'
                }
              }
            }
          },
          EnableAvailabilityZonesForLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'AvailabilityZones'],
              members: {
                LoadBalancerName: {},
                AvailabilityZones: {
                  shape: 'S13'
                }
              }
            },
            output: {
              resultWrapper: 'EnableAvailabilityZonesForLoadBalancerResult',
              type: 'structure',
              members: {
                AvailabilityZones: {
                  shape: 'S13'
                }
              }
            }
          },
          ModifyLoadBalancerAttributes: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'LoadBalancerAttributes'],
              members: {
                LoadBalancerName: {},
                LoadBalancerAttributes: {
                  shape: 'S2a'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyLoadBalancerAttributesResult',
              type: 'structure',
              members: {
                LoadBalancerName: {},
                LoadBalancerAttributes: {
                  shape: 'S2a'
                }
              }
            }
          },
          RegisterInstancesWithLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'Instances'],
              members: {
                LoadBalancerName: {},
                Instances: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              resultWrapper: 'RegisterInstancesWithLoadBalancerResult',
              type: 'structure',
              members: {
                Instances: {
                  shape: 'S1p'
                }
              }
            }
          },
          RemoveTags: {
            input: {
              type: 'structure',
              required: ['LoadBalancerNames', 'Tags'],
              members: {
                LoadBalancerNames: {
                  shape: 'S2'
                },
                Tags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'RemoveTagsResult',
              type: 'structure',
              members: {}
            }
          },
          SetLoadBalancerListenerSSLCertificate: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'LoadBalancerPort', 'SSLCertificateId'],
              members: {
                LoadBalancerName: {},
                LoadBalancerPort: {
                  type: 'integer'
                },
                SSLCertificateId: {}
              }
            },
            output: {
              resultWrapper: 'SetLoadBalancerListenerSSLCertificateResult',
              type: 'structure',
              members: {}
            }
          },
          SetLoadBalancerPoliciesForBackendServer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'InstancePort', 'PolicyNames'],
              members: {
                LoadBalancerName: {},
                InstancePort: {
                  type: 'integer'
                },
                PolicyNames: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              resultWrapper: 'SetLoadBalancerPoliciesForBackendServerResult',
              type: 'structure',
              members: {}
            }
          },
          SetLoadBalancerPoliciesOfListener: {
            input: {
              type: 'structure',
              required: ['LoadBalancerName', 'LoadBalancerPort', 'PolicyNames'],
              members: {
                LoadBalancerName: {},
                LoadBalancerPort: {
                  type: 'integer'
                },
                PolicyNames: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              resultWrapper: 'SetLoadBalancerPoliciesOfListenerResult',
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'list',
            member: {}
          },
          Si: {
            type: 'structure',
            required: ['Target', 'Interval', 'Timeout', 'UnhealthyThreshold', 'HealthyThreshold'],
            members: {
              Target: {},
              Interval: {
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              UnhealthyThreshold: {
                type: 'integer'
              },
              HealthyThreshold: {
                type: 'integer'
              }
            }
          },
          Sx: {
            type: 'list',
            member: {
              shape: 'Sy'
            }
          },
          Sy: {
            type: 'structure',
            required: ['Protocol', 'LoadBalancerPort', 'InstancePort'],
            members: {
              Protocol: {},
              LoadBalancerPort: {
                type: 'integer'
              },
              InstanceProtocol: {},
              InstancePort: {
                type: 'integer'
              },
              SSLCertificateId: {}
            }
          },
          S13: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                InstanceId: {}
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              CrossZoneLoadBalancing: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  }
                }
              },
              AccessLog: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  S3BucketName: {},
                  EmitInterval: {
                    type: 'integer'
                  },
                  S3BucketPrefix: {}
                }
              },
              ConnectionDraining: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Timeout: {
                    type: 'integer'
                  }
                }
              },
              ConnectionSettings: {
                type: 'structure',
                required: ['IdleTimeout'],
                members: {
                  IdleTimeout: {
                    type: 'integer'
                  }
                }
              },
              AdditionalAttributes: {
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
          },
          S2s: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bfa10d19a51c93b5724e54304ce0add52b170630.js.map