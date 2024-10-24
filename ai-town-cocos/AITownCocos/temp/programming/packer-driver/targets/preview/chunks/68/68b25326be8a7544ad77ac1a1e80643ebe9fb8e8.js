System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-02',
          endpointPrefix: 'route53-recovery-cluster',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Route53 Recovery Cluster',
          serviceId: 'Route53 Recovery Cluster',
          signatureVersion: 'v4',
          signingName: 'route53-recovery-cluster',
          targetPrefix: 'ToggleCustomerAPI',
          uid: 'route53-recovery-cluster-2019-12-02'
        },
        operations: {
          GetRoutingControlState: {
            input: {
              type: 'structure',
              required: ['RoutingControlArn'],
              members: {
                RoutingControlArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RoutingControlArn', 'RoutingControlState'],
              members: {
                RoutingControlArn: {},
                RoutingControlState: {},
                RoutingControlName: {}
              }
            }
          },
          ListRoutingControls: {
            input: {
              type: 'structure',
              members: {
                ControlPanelArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RoutingControls'],
              members: {
                RoutingControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ControlPanelArn: {},
                      ControlPanelName: {},
                      RoutingControlArn: {},
                      RoutingControlName: {},
                      RoutingControlState: {},
                      Owner: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          UpdateRoutingControlState: {
            input: {
              type: 'structure',
              required: ['RoutingControlArn', 'RoutingControlState'],
              members: {
                RoutingControlArn: {},
                RoutingControlState: {},
                SafetyRulesToOverride: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRoutingControlStates: {
            input: {
              type: 'structure',
              required: ['UpdateRoutingControlStateEntries'],
              members: {
                UpdateRoutingControlStateEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RoutingControlArn', 'RoutingControlState'],
                    members: {
                      RoutingControlArn: {},
                      RoutingControlState: {}
                    }
                  }
                },
                SafetyRulesToOverride: {
                  shape: 'Sf'
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
          Sf: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=68b25326be8a7544ad77ac1a1e80643ebe9fb8e8.js.map