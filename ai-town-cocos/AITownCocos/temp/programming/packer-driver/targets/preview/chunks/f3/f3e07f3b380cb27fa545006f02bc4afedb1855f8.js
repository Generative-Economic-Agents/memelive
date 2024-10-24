System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-12-01',
          endpointPrefix: 'elasticloadbalancing',
          protocol: 'query',
          protocols: ['query'],
          serviceAbbreviation: 'Elastic Load Balancing v2',
          serviceFullName: 'Elastic Load Balancing',
          serviceId: 'Elastic Load Balancing v2',
          signatureVersion: 'v4',
          uid: 'elasticloadbalancingv2-2015-12-01',
          xmlNamespace: 'http://elasticloadbalancing.amazonaws.com/doc/2015-12-01/'
        },
        operations: {
          AddListenerCertificates: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'Certificates'],
              members: {
                ListenerArn: {},
                Certificates: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'AddListenerCertificatesResult',
              type: 'structure',
              members: {
                Certificates: {
                  shape: 'S3'
                }
              }
            }
          },
          AddTags: {
            input: {
              type: 'structure',
              required: ['ResourceArns', 'Tags'],
              members: {
                ResourceArns: {
                  shape: 'S9'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'AddTagsResult',
              type: 'structure',
              members: {}
            }
          },
          AddTrustStoreRevocations: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn'],
              members: {
                TrustStoreArn: {},
                RevocationContents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      S3Bucket: {},
                      S3Key: {},
                      S3ObjectVersion: {},
                      RevocationType: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'AddTrustStoreRevocationsResult',
              type: 'structure',
              members: {
                TrustStoreRevocations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrustStoreArn: {},
                      RevocationId: {
                        type: 'long'
                      },
                      RevocationType: {},
                      NumberOfRevokedEntries: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          CreateListener: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn', 'DefaultActions'],
              members: {
                LoadBalancerArn: {},
                Protocol: {},
                Port: {
                  type: 'integer'
                },
                SslPolicy: {},
                Certificates: {
                  shape: 'S3'
                },
                DefaultActions: {
                  shape: 'Sy'
                },
                AlpnPolicy: {
                  shape: 'S2b'
                },
                Tags: {
                  shape: 'Sb'
                },
                MutualAuthentication: {
                  shape: 'S2d'
                }
              }
            },
            output: {
              resultWrapper: 'CreateListenerResult',
              type: 'structure',
              members: {
                Listeners: {
                  shape: 'S2h'
                }
              }
            }
          },
          CreateLoadBalancer: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Subnets: {
                  shape: 'S2l'
                },
                SubnetMappings: {
                  shape: 'S2n'
                },
                SecurityGroups: {
                  shape: 'S2s'
                },
                Scheme: {},
                Tags: {
                  shape: 'Sb'
                },
                Type: {},
                IpAddressType: {},
                CustomerOwnedIpv4Pool: {}
              }
            },
            output: {
              resultWrapper: 'CreateLoadBalancerResult',
              type: 'structure',
              members: {
                LoadBalancers: {
                  shape: 'S2z'
                }
              }
            }
          },
          CreateRule: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'Conditions', 'Priority', 'Actions'],
              members: {
                ListenerArn: {},
                Conditions: {
                  shape: 'S3h'
                },
                Priority: {
                  type: 'integer'
                },
                Actions: {
                  shape: 'Sy'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateRuleResult',
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S3x'
                }
              }
            }
          },
          CreateTargetGroup: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Protocol: {},
                ProtocolVersion: {},
                Port: {
                  type: 'integer'
                },
                VpcId: {},
                HealthCheckProtocol: {},
                HealthCheckPort: {},
                HealthCheckEnabled: {
                  type: 'boolean'
                },
                HealthCheckPath: {},
                HealthCheckIntervalSeconds: {
                  type: 'integer'
                },
                HealthCheckTimeoutSeconds: {
                  type: 'integer'
                },
                HealthyThresholdCount: {
                  type: 'integer'
                },
                UnhealthyThresholdCount: {
                  type: 'integer'
                },
                Matcher: {
                  shape: 'S4b'
                },
                TargetType: {},
                Tags: {
                  shape: 'Sb'
                },
                IpAddressType: {}
              }
            },
            output: {
              resultWrapper: 'CreateTargetGroupResult',
              type: 'structure',
              members: {
                TargetGroups: {
                  shape: 'S4h'
                }
              }
            }
          },
          CreateTrustStore: {
            input: {
              type: 'structure',
              required: ['Name', 'CaCertificatesBundleS3Bucket', 'CaCertificatesBundleS3Key'],
              members: {
                Name: {},
                CaCertificatesBundleS3Bucket: {},
                CaCertificatesBundleS3Key: {},
                CaCertificatesBundleS3ObjectVersion: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              resultWrapper: 'CreateTrustStoreResult',
              type: 'structure',
              members: {
                TrustStores: {
                  shape: 'S4n'
                }
              }
            }
          },
          DeleteListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteListenerResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteLoadBalancer: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn'],
              members: {
                LoadBalancerArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteLoadBalancerResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteRule: {
            input: {
              type: 'structure',
              required: ['RuleArn'],
              members: {
                RuleArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteRuleResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteTargetGroup: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn'],
              members: {
                TargetGroupArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteTargetGroupResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteTrustStore: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn'],
              members: {
                TrustStoreArn: {}
              }
            },
            output: {
              resultWrapper: 'DeleteTrustStoreResult',
              type: 'structure',
              members: {}
            }
          },
          DeregisterTargets: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn', 'Targets'],
              members: {
                TargetGroupArn: {},
                Targets: {
                  shape: 'S53'
                }
              }
            },
            output: {
              resultWrapper: 'DeregisterTargetsResult',
              type: 'structure',
              members: {}
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
          DescribeListenerCertificates: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {},
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeListenerCertificatesResult',
              type: 'structure',
              members: {
                Certificates: {
                  shape: 'S3'
                },
                NextMarker: {}
              }
            }
          },
          DescribeListeners: {
            input: {
              type: 'structure',
              members: {
                LoadBalancerArn: {},
                ListenerArns: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeListenersResult',
              type: 'structure',
              members: {
                Listeners: {
                  shape: 'S2h'
                },
                NextMarker: {}
              }
            }
          },
          DescribeLoadBalancerAttributes: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn'],
              members: {
                LoadBalancerArn: {}
              }
            },
            output: {
              resultWrapper: 'DescribeLoadBalancerAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S5m'
                }
              }
            }
          },
          DescribeLoadBalancers: {
            input: {
              type: 'structure',
              members: {
                LoadBalancerArns: {
                  shape: 'S4j'
                },
                Names: {
                  type: 'list',
                  member: {}
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
                LoadBalancers: {
                  shape: 'S2z'
                },
                NextMarker: {}
              }
            }
          },
          DescribeRules: {
            input: {
              type: 'structure',
              members: {
                ListenerArn: {},
                RuleArns: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeRulesResult',
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S3x'
                },
                NextMarker: {}
              }
            }
          },
          DescribeSSLPolicies: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                },
                LoadBalancerType: {}
              }
            },
            output: {
              resultWrapper: 'DescribeSSLPoliciesResult',
              type: 'structure',
              members: {
                SslPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SslProtocols: {
                        type: 'list',
                        member: {}
                      },
                      Ciphers: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Priority: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      Name: {},
                      SupportedLoadBalancerTypes: {
                        shape: 'S3k'
                      }
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
              required: ['ResourceArns'],
              members: {
                ResourceArns: {
                  shape: 'S9'
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
                      ResourceArn: {},
                      Tags: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTargetGroupAttributes: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn'],
              members: {
                TargetGroupArn: {}
              }
            },
            output: {
              resultWrapper: 'DescribeTargetGroupAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S6d'
                }
              }
            }
          },
          DescribeTargetGroups: {
            input: {
              type: 'structure',
              members: {
                LoadBalancerArn: {},
                TargetGroupArns: {
                  type: 'list',
                  member: {}
                },
                Names: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTargetGroupsResult',
              type: 'structure',
              members: {
                TargetGroups: {
                  shape: 'S4h'
                },
                NextMarker: {}
              }
            }
          },
          DescribeTargetHealth: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn'],
              members: {
                TargetGroupArn: {},
                Targets: {
                  shape: 'S53'
                },
                Include: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTargetHealthResult',
              type: 'structure',
              members: {
                TargetHealthDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Target: {
                        shape: 'S54'
                      },
                      HealthCheckPort: {},
                      TargetHealth: {
                        type: 'structure',
                        members: {
                          State: {},
                          Reason: {},
                          Description: {}
                        }
                      },
                      AnomalyDetection: {
                        type: 'structure',
                        members: {
                          Result: {},
                          MitigationInEffect: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTrustStoreAssociations: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn'],
              members: {
                TrustStoreArn: {},
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTrustStoreAssociationsResult',
              type: 'structure',
              members: {
                TrustStoreAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {}
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeTrustStoreRevocations: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn'],
              members: {
                TrustStoreArn: {},
                RevocationIds: {
                  shape: 'S74'
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTrustStoreRevocationsResult',
              type: 'structure',
              members: {
                TrustStoreRevocations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrustStoreArn: {},
                      RevocationId: {
                        type: 'long'
                      },
                      RevocationType: {},
                      NumberOfRevokedEntries: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextMarker: {}
              }
            }
          },
          DescribeTrustStores: {
            input: {
              type: 'structure',
              members: {
                TrustStoreArns: {
                  type: 'list',
                  member: {}
                },
                Names: {
                  type: 'list',
                  member: {}
                },
                Marker: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeTrustStoresResult',
              type: 'structure',
              members: {
                TrustStores: {
                  shape: 'S4n'
                },
                NextMarker: {}
              }
            }
          },
          GetTrustStoreCaCertificatesBundle: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn'],
              members: {
                TrustStoreArn: {}
              }
            },
            output: {
              resultWrapper: 'GetTrustStoreCaCertificatesBundleResult',
              type: 'structure',
              members: {
                Location: {}
              }
            }
          },
          GetTrustStoreRevocationContent: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn', 'RevocationId'],
              members: {
                TrustStoreArn: {},
                RevocationId: {
                  type: 'long'
                }
              }
            },
            output: {
              resultWrapper: 'GetTrustStoreRevocationContentResult',
              type: 'structure',
              members: {
                Location: {}
              }
            }
          },
          ModifyListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {},
                Port: {
                  type: 'integer'
                },
                Protocol: {},
                SslPolicy: {},
                Certificates: {
                  shape: 'S3'
                },
                DefaultActions: {
                  shape: 'Sy'
                },
                AlpnPolicy: {
                  shape: 'S2b'
                },
                MutualAuthentication: {
                  shape: 'S2d'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyListenerResult',
              type: 'structure',
              members: {
                Listeners: {
                  shape: 'S2h'
                }
              }
            }
          },
          ModifyLoadBalancerAttributes: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn', 'Attributes'],
              members: {
                LoadBalancerArn: {},
                Attributes: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyLoadBalancerAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S5m'
                }
              }
            }
          },
          ModifyRule: {
            input: {
              type: 'structure',
              required: ['RuleArn'],
              members: {
                RuleArn: {},
                Conditions: {
                  shape: 'S3h'
                },
                Actions: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyRuleResult',
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S3x'
                }
              }
            }
          },
          ModifyTargetGroup: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn'],
              members: {
                TargetGroupArn: {},
                HealthCheckProtocol: {},
                HealthCheckPort: {},
                HealthCheckPath: {},
                HealthCheckEnabled: {
                  type: 'boolean'
                },
                HealthCheckIntervalSeconds: {
                  type: 'integer'
                },
                HealthCheckTimeoutSeconds: {
                  type: 'integer'
                },
                HealthyThresholdCount: {
                  type: 'integer'
                },
                UnhealthyThresholdCount: {
                  type: 'integer'
                },
                Matcher: {
                  shape: 'S4b'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyTargetGroupResult',
              type: 'structure',
              members: {
                TargetGroups: {
                  shape: 'S4h'
                }
              }
            }
          },
          ModifyTargetGroupAttributes: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn', 'Attributes'],
              members: {
                TargetGroupArn: {},
                Attributes: {
                  shape: 'S6d'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyTargetGroupAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S6d'
                }
              }
            }
          },
          ModifyTrustStore: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn', 'CaCertificatesBundleS3Bucket', 'CaCertificatesBundleS3Key'],
              members: {
                TrustStoreArn: {},
                CaCertificatesBundleS3Bucket: {},
                CaCertificatesBundleS3Key: {},
                CaCertificatesBundleS3ObjectVersion: {}
              }
            },
            output: {
              resultWrapper: 'ModifyTrustStoreResult',
              type: 'structure',
              members: {
                TrustStores: {
                  shape: 'S4n'
                }
              }
            }
          },
          RegisterTargets: {
            input: {
              type: 'structure',
              required: ['TargetGroupArn', 'Targets'],
              members: {
                TargetGroupArn: {},
                Targets: {
                  shape: 'S53'
                }
              }
            },
            output: {
              resultWrapper: 'RegisterTargetsResult',
              type: 'structure',
              members: {}
            }
          },
          RemoveListenerCertificates: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'Certificates'],
              members: {
                ListenerArn: {},
                Certificates: {
                  shape: 'S3'
                }
              }
            },
            output: {
              resultWrapper: 'RemoveListenerCertificatesResult',
              type: 'structure',
              members: {}
            }
          },
          RemoveTags: {
            input: {
              type: 'structure',
              required: ['ResourceArns', 'TagKeys'],
              members: {
                ResourceArns: {
                  shape: 'S9'
                },
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'RemoveTagsResult',
              type: 'structure',
              members: {}
            }
          },
          RemoveTrustStoreRevocations: {
            input: {
              type: 'structure',
              required: ['TrustStoreArn', 'RevocationIds'],
              members: {
                TrustStoreArn: {},
                RevocationIds: {
                  shape: 'S74'
                }
              }
            },
            output: {
              resultWrapper: 'RemoveTrustStoreRevocationsResult',
              type: 'structure',
              members: {}
            }
          },
          SetIpAddressType: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn', 'IpAddressType'],
              members: {
                LoadBalancerArn: {},
                IpAddressType: {}
              }
            },
            output: {
              resultWrapper: 'SetIpAddressTypeResult',
              type: 'structure',
              members: {
                IpAddressType: {}
              }
            }
          },
          SetRulePriorities: {
            input: {
              type: 'structure',
              required: ['RulePriorities'],
              members: {
                RulePriorities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleArn: {},
                      Priority: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'SetRulePrioritiesResult',
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S3x'
                }
              }
            }
          },
          SetSecurityGroups: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn', 'SecurityGroups'],
              members: {
                LoadBalancerArn: {},
                SecurityGroups: {
                  shape: 'S2s'
                },
                EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: {}
              }
            },
            output: {
              resultWrapper: 'SetSecurityGroupsResult',
              type: 'structure',
              members: {
                SecurityGroupIds: {
                  shape: 'S2s'
                },
                EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: {}
              }
            }
          },
          SetSubnets: {
            input: {
              type: 'structure',
              required: ['LoadBalancerArn'],
              members: {
                LoadBalancerArn: {},
                Subnets: {
                  shape: 'S2l'
                },
                SubnetMappings: {
                  shape: 'S2n'
                },
                IpAddressType: {}
              }
            },
            output: {
              resultWrapper: 'SetSubnetsResult',
              type: 'structure',
              members: {
                AvailabilityZones: {
                  shape: 'S38'
                },
                IpAddressType: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CertificateArn: {},
                IsDefault: {
                  type: 'boolean'
                }
              }
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sb: {
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
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type'],
              members: {
                Type: {},
                TargetGroupArn: {},
                AuthenticateOidcConfig: {
                  type: 'structure',
                  required: ['Issuer', 'AuthorizationEndpoint', 'TokenEndpoint', 'UserInfoEndpoint', 'ClientId'],
                  members: {
                    Issuer: {},
                    AuthorizationEndpoint: {},
                    TokenEndpoint: {},
                    UserInfoEndpoint: {},
                    ClientId: {},
                    ClientSecret: {},
                    SessionCookieName: {},
                    Scope: {},
                    SessionTimeout: {
                      type: 'long'
                    },
                    AuthenticationRequestExtraParams: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    OnUnauthenticatedRequest: {},
                    UseExistingClientSecret: {
                      type: 'boolean'
                    }
                  }
                },
                AuthenticateCognitoConfig: {
                  type: 'structure',
                  required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                  members: {
                    UserPoolArn: {},
                    UserPoolClientId: {},
                    UserPoolDomain: {},
                    SessionCookieName: {},
                    Scope: {},
                    SessionTimeout: {
                      type: 'long'
                    },
                    AuthenticationRequestExtraParams: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    OnUnauthenticatedRequest: {}
                  }
                },
                Order: {
                  type: 'integer'
                },
                RedirectConfig: {
                  type: 'structure',
                  required: ['StatusCode'],
                  members: {
                    Protocol: {},
                    Port: {},
                    Host: {},
                    Path: {},
                    Query: {},
                    StatusCode: {}
                  }
                },
                FixedResponseConfig: {
                  type: 'structure',
                  required: ['StatusCode'],
                  members: {
                    MessageBody: {},
                    StatusCode: {},
                    ContentType: {}
                  }
                },
                ForwardConfig: {
                  type: 'structure',
                  members: {
                    TargetGroups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          TargetGroupArn: {},
                          Weight: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    TargetGroupStickinessConfig: {
                      type: 'structure',
                      members: {
                        Enabled: {
                          type: 'boolean'
                        },
                        DurationSeconds: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2b: {
            type: 'list',
            member: {}
          },
          S2d: {
            type: 'structure',
            members: {
              Mode: {},
              TrustStoreArn: {},
              IgnoreClientCertificateExpiry: {
                type: 'boolean'
              }
            }
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ListenerArn: {},
                LoadBalancerArn: {},
                Port: {
                  type: 'integer'
                },
                Protocol: {},
                Certificates: {
                  shape: 'S3'
                },
                SslPolicy: {},
                DefaultActions: {
                  shape: 'Sy'
                },
                AlpnPolicy: {
                  shape: 'S2b'
                },
                MutualAuthentication: {
                  shape: 'S2d'
                }
              }
            }
          },
          S2l: {
            type: 'list',
            member: {}
          },
          S2n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SubnetId: {},
                AllocationId: {},
                PrivateIPv4Address: {},
                IPv6Address: {}
              }
            }
          },
          S2s: {
            type: 'list',
            member: {}
          },
          S2z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LoadBalancerArn: {},
                DNSName: {},
                CanonicalHostedZoneId: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LoadBalancerName: {},
                Scheme: {},
                VpcId: {},
                State: {
                  type: 'structure',
                  members: {
                    Code: {},
                    Reason: {}
                  }
                },
                Type: {},
                AvailabilityZones: {
                  shape: 'S38'
                },
                SecurityGroups: {
                  shape: 'S2s'
                },
                IpAddressType: {},
                CustomerOwnedIpv4Pool: {},
                EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: {}
              }
            }
          },
          S38: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ZoneName: {},
                SubnetId: {},
                OutpostId: {},
                LoadBalancerAddresses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IpAddress: {},
                      AllocationId: {},
                      PrivateIPv4Address: {},
                      IPv6Address: {}
                    }
                  }
                }
              }
            }
          },
          S3h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Field: {},
                Values: {
                  shape: 'S3k'
                },
                HostHeaderConfig: {
                  type: 'structure',
                  members: {
                    Values: {
                      shape: 'S3k'
                    }
                  }
                },
                PathPatternConfig: {
                  type: 'structure',
                  members: {
                    Values: {
                      shape: 'S3k'
                    }
                  }
                },
                HttpHeaderConfig: {
                  type: 'structure',
                  members: {
                    HttpHeaderName: {},
                    Values: {
                      shape: 'S3k'
                    }
                  }
                },
                QueryStringConfig: {
                  type: 'structure',
                  members: {
                    Values: {
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
                HttpRequestMethodConfig: {
                  type: 'structure',
                  members: {
                    Values: {
                      shape: 'S3k'
                    }
                  }
                },
                SourceIpConfig: {
                  type: 'structure',
                  members: {
                    Values: {
                      shape: 'S3k'
                    }
                  }
                }
              }
            }
          },
          S3k: {
            type: 'list',
            member: {}
          },
          S3x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RuleArn: {},
                Priority: {},
                Conditions: {
                  shape: 'S3h'
                },
                Actions: {
                  shape: 'Sy'
                },
                IsDefault: {
                  type: 'boolean'
                }
              }
            }
          },
          S4b: {
            type: 'structure',
            members: {
              HttpCode: {},
              GrpcCode: {}
            }
          },
          S4h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TargetGroupArn: {},
                TargetGroupName: {},
                Protocol: {},
                Port: {
                  type: 'integer'
                },
                VpcId: {},
                HealthCheckProtocol: {},
                HealthCheckPort: {},
                HealthCheckEnabled: {
                  type: 'boolean'
                },
                HealthCheckIntervalSeconds: {
                  type: 'integer'
                },
                HealthCheckTimeoutSeconds: {
                  type: 'integer'
                },
                HealthyThresholdCount: {
                  type: 'integer'
                },
                UnhealthyThresholdCount: {
                  type: 'integer'
                },
                HealthCheckPath: {},
                Matcher: {
                  shape: 'S4b'
                },
                LoadBalancerArns: {
                  shape: 'S4j'
                },
                TargetType: {},
                ProtocolVersion: {},
                IpAddressType: {}
              }
            }
          },
          S4j: {
            type: 'list',
            member: {}
          },
          S4n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                TrustStoreArn: {},
                Status: {},
                NumberOfCaCertificates: {
                  type: 'integer'
                },
                TotalRevokedEntries: {
                  type: 'long'
                }
              }
            }
          },
          S53: {
            type: 'list',
            member: {
              shape: 'S54'
            }
          },
          S54: {
            type: 'structure',
            required: ['Id'],
            members: {
              Id: {},
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {}
            }
          },
          S5m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S6d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S74: {
            type: 'list',
            member: {
              type: 'long'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f3e07f3b380cb27fa545006f02bc4afedb1855f8.js.map