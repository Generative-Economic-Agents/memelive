System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2020-11-02',
          endpointPrefix: 'route53-recovery-control-config',
          signingName: 'route53-recovery-control-config',
          serviceFullName: 'AWS Route53 Recovery Control Config',
          serviceId: 'Route53 Recovery Control Config',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'route53-recovery-control-config-2020-11-02',
          signatureVersion: 'v4'
        },
        operations: {
          CreateCluster: {
            http: {
              requestUri: '/cluster',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ClusterName: {},
                Tags: {
                  shape: 'S3'
                }
              },
              required: ['ClusterName']
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          CreateControlPanel: {
            http: {
              requestUri: '/controlpanel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ClusterArn: {},
                ControlPanelName: {},
                Tags: {
                  shape: 'S3'
                }
              },
              required: ['ClusterArn', 'ControlPanelName']
            },
            output: {
              type: 'structure',
              members: {
                ControlPanel: {
                  shape: 'Sh'
                }
              }
            }
          },
          CreateRoutingControl: {
            http: {
              requestUri: '/routingcontrol',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ClusterArn: {},
                ControlPanelArn: {},
                RoutingControlName: {}
              },
              required: ['ClusterArn', 'RoutingControlName']
            },
            output: {
              type: 'structure',
              members: {
                RoutingControl: {
                  shape: 'Sm'
                }
              }
            }
          },
          CreateSafetyRule: {
            http: {
              requestUri: '/safetyrule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AssertionRule: {
                  type: 'structure',
                  members: {
                    AssertedControls: {
                      shape: 'Sp'
                    },
                    ControlPanelArn: {},
                    Name: {},
                    RuleConfig: {
                      shape: 'Sq'
                    },
                    WaitPeriodMs: {
                      type: 'integer'
                    }
                  },
                  required: ['ControlPanelArn', 'AssertedControls', 'RuleConfig', 'WaitPeriodMs', 'Name']
                },
                ClientToken: {
                  idempotencyToken: true
                },
                GatingRule: {
                  type: 'structure',
                  members: {
                    ControlPanelArn: {},
                    GatingControls: {
                      shape: 'Sp'
                    },
                    Name: {},
                    RuleConfig: {
                      shape: 'Sq'
                    },
                    TargetControls: {
                      shape: 'Sp'
                    },
                    WaitPeriodMs: {
                      type: 'integer'
                    }
                  },
                  required: ['TargetControls', 'ControlPanelArn', 'GatingControls', 'RuleConfig', 'WaitPeriodMs', 'Name']
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssertionRule: {
                  shape: 'Su'
                },
                GatingRule: {
                  shape: 'Sv'
                }
              }
            }
          },
          DeleteCluster: {
            http: {
              method: 'DELETE',
              requestUri: '/cluster/{ClusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'ClusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteControlPanel: {
            http: {
              method: 'DELETE',
              requestUri: '/controlpanel/{ControlPanelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {
                  location: 'uri',
                  locationName: 'ControlPanelArn'
                }
              },
              required: ['ControlPanelArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRoutingControl: {
            http: {
              method: 'DELETE',
              requestUri: '/routingcontrol/{RoutingControlArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RoutingControlArn: {
                  location: 'uri',
                  locationName: 'RoutingControlArn'
                }
              },
              required: ['RoutingControlArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSafetyRule: {
            http: {
              method: 'DELETE',
              requestUri: '/safetyrule/{SafetyRuleArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SafetyRuleArn: {
                  location: 'uri',
                  locationName: 'SafetyRuleArn'
                }
              },
              required: ['SafetyRuleArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeCluster: {
            http: {
              method: 'GET',
              requestUri: '/cluster/{ClusterArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'uri',
                  locationName: 'ClusterArn'
                }
              },
              required: ['ClusterArn']
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'S7'
                }
              }
            }
          },
          DescribeControlPanel: {
            http: {
              method: 'GET',
              requestUri: '/controlpanel/{ControlPanelArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {
                  location: 'uri',
                  locationName: 'ControlPanelArn'
                }
              },
              required: ['ControlPanelArn']
            },
            output: {
              type: 'structure',
              members: {
                ControlPanel: {
                  shape: 'Sh'
                }
              }
            }
          },
          DescribeRoutingControl: {
            http: {
              method: 'GET',
              requestUri: '/routingcontrol/{RoutingControlArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RoutingControlArn: {
                  location: 'uri',
                  locationName: 'RoutingControlArn'
                }
              },
              required: ['RoutingControlArn']
            },
            output: {
              type: 'structure',
              members: {
                RoutingControl: {
                  shape: 'Sm'
                }
              }
            }
          },
          DescribeSafetyRule: {
            http: {
              method: 'GET',
              requestUri: '/safetyrule/{SafetyRuleArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SafetyRuleArn: {
                  location: 'uri',
                  locationName: 'SafetyRuleArn'
                }
              },
              required: ['SafetyRuleArn']
            },
            output: {
              type: 'structure',
              members: {
                AssertionRule: {
                  shape: 'Su'
                },
                GatingRule: {
                  shape: 'Sv'
                }
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/resourcePolicy/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            }
          },
          ListAssociatedRoute53HealthChecks: {
            http: {
              method: 'GET',
              requestUri: '/routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                RoutingControlArn: {
                  location: 'uri',
                  locationName: 'RoutingControlArn'
                }
              },
              required: ['RoutingControlArn']
            },
            output: {
              type: 'structure',
              members: {
                HealthCheckIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListClusters: {
            http: {
              method: 'GET',
              requestUri: '/cluster',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Clusters: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListControlPanels: {
            http: {
              method: 'GET',
              requestUri: '/controlpanels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ClusterArn: {
                  location: 'querystring',
                  locationName: 'ClusterArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ControlPanels: {
                  type: 'list',
                  member: {
                    shape: 'Sh'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRoutingControls: {
            http: {
              method: 'GET',
              requestUri: '/controlpanel/{ControlPanelArn}/routingcontrols',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {
                  location: 'uri',
                  locationName: 'ControlPanelArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['ControlPanelArn']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RoutingControls: {
                  type: 'list',
                  member: {
                    shape: 'Sm'
                  }
                }
              }
            }
          },
          ListSafetyRules: {
            http: {
              method: 'GET',
              requestUri: '/controlpanel/{ControlPanelArn}/safetyrules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {
                  location: 'uri',
                  locationName: 'ControlPanelArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['ControlPanelArn']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SafetyRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ASSERTION: {
                        shape: 'Su'
                      },
                      GATING: {
                        shape: 'Sv'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S3'
                }
              },
              required: ['ResourceArn', 'Tags']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'TagKeys',
                  type: 'list',
                  member: {}
                }
              },
              required: ['ResourceArn', 'TagKeys']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateControlPanel: {
            http: {
              method: 'PUT',
              requestUri: '/controlpanel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {},
                ControlPanelName: {}
              },
              required: ['ControlPanelArn', 'ControlPanelName']
            },
            output: {
              type: 'structure',
              members: {
                ControlPanel: {
                  shape: 'Sh'
                }
              }
            }
          },
          UpdateRoutingControl: {
            http: {
              method: 'PUT',
              requestUri: '/routingcontrol',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RoutingControlArn: {},
                RoutingControlName: {}
              },
              required: ['RoutingControlName', 'RoutingControlArn']
            },
            output: {
              type: 'structure',
              members: {
                RoutingControl: {
                  shape: 'Sm'
                }
              }
            }
          },
          UpdateSafetyRule: {
            http: {
              method: 'PUT',
              requestUri: '/safetyrule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AssertionRuleUpdate: {
                  type: 'structure',
                  members: {
                    Name: {},
                    SafetyRuleArn: {},
                    WaitPeriodMs: {
                      type: 'integer'
                    }
                  },
                  required: ['SafetyRuleArn', 'WaitPeriodMs', 'Name']
                },
                GatingRuleUpdate: {
                  type: 'structure',
                  members: {
                    Name: {},
                    SafetyRuleArn: {},
                    WaitPeriodMs: {
                      type: 'integer'
                    }
                  },
                  required: ['SafetyRuleArn', 'WaitPeriodMs', 'Name']
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssertionRule: {
                  shape: 'Su'
                },
                GatingRule: {
                  shape: 'Sv'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'map',
            key: {},
            value: {}
          },
          S7: {
            type: 'structure',
            members: {
              ClusterArn: {},
              ClusterEndpoints: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Endpoint: {},
                    Region: {}
                  }
                }
              },
              Name: {},
              Status: {},
              Owner: {}
            }
          },
          Sh: {
            type: 'structure',
            members: {
              ClusterArn: {},
              ControlPanelArn: {},
              DefaultControlPanel: {
                type: 'boolean'
              },
              Name: {},
              RoutingControlCount: {
                type: 'integer'
              },
              Status: {},
              Owner: {}
            }
          },
          Sm: {
            type: 'structure',
            members: {
              ControlPanelArn: {},
              Name: {},
              RoutingControlArn: {},
              Status: {},
              Owner: {}
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sq: {
            type: 'structure',
            members: {
              Inverted: {
                type: 'boolean'
              },
              Threshold: {
                type: 'integer'
              },
              Type: {}
            },
            required: ['Type', 'Inverted', 'Threshold']
          },
          Su: {
            type: 'structure',
            members: {
              AssertedControls: {
                shape: 'Sp'
              },
              ControlPanelArn: {},
              Name: {},
              RuleConfig: {
                shape: 'Sq'
              },
              SafetyRuleArn: {},
              Status: {},
              WaitPeriodMs: {
                type: 'integer'
              },
              Owner: {}
            },
            required: ['Status', 'ControlPanelArn', 'SafetyRuleArn', 'AssertedControls', 'RuleConfig', 'WaitPeriodMs', 'Name']
          },
          Sv: {
            type: 'structure',
            members: {
              ControlPanelArn: {},
              GatingControls: {
                shape: 'Sp'
              },
              Name: {},
              RuleConfig: {
                shape: 'Sq'
              },
              SafetyRuleArn: {},
              Status: {},
              TargetControls: {
                shape: 'Sp'
              },
              WaitPeriodMs: {
                type: 'integer'
              },
              Owner: {}
            },
            required: ['Status', 'TargetControls', 'ControlPanelArn', 'SafetyRuleArn', 'GatingControls', 'RuleConfig', 'WaitPeriodMs', 'Name']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1e6635a4afe4ba85f98d0c832386d3f4b54e8745.js.map