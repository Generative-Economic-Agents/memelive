System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-22',
          endpointPrefix: 'personalize-runtime',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon Personalize Runtime',
          serviceId: 'Personalize Runtime',
          signatureVersion: 'v4',
          signingName: 'personalize',
          uid: 'personalize-runtime-2018-05-22'
        },
        operations: {
          GetActionRecommendations: {
            http: {
              requestUri: '/action-recommendations'
            },
            input: {
              type: 'structure',
              members: {
                campaignArn: {},
                userId: {},
                numResults: {
                  type: 'integer'
                },
                filterArn: {},
                filterValues: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                actionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      actionId: {},
                      score: {
                        type: 'double'
                      }
                    }
                  }
                },
                recommendationId: {}
              }
            },
            idempotent: true
          },
          GetPersonalizedRanking: {
            http: {
              requestUri: '/personalize-ranking'
            },
            input: {
              type: 'structure',
              required: ['campaignArn', 'inputList', 'userId'],
              members: {
                campaignArn: {},
                inputList: {
                  type: 'list',
                  member: {}
                },
                userId: {},
                context: {
                  shape: 'Sh'
                },
                filterArn: {},
                filterValues: {
                  shape: 'S5'
                },
                metadataColumns: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                personalizedRanking: {
                  shape: 'Sp'
                },
                recommendationId: {}
              }
            },
            idempotent: true
          },
          GetRecommendations: {
            http: {
              requestUri: '/recommendations'
            },
            input: {
              type: 'structure',
              members: {
                campaignArn: {},
                itemId: {},
                userId: {},
                numResults: {
                  type: 'integer'
                },
                context: {
                  shape: 'Sh'
                },
                filterArn: {},
                filterValues: {
                  shape: 'S5'
                },
                recommenderArn: {},
                promotions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      percentPromotedItems: {
                        type: 'integer'
                      },
                      filterArn: {},
                      filterValues: {
                        shape: 'S5'
                      }
                    }
                  }
                },
                metadataColumns: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                itemList: {
                  shape: 'Sp'
                },
                recommendationId: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          Sh: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                itemId: {},
                score: {
                  type: 'double'
                },
                promotionName: {},
                metadata: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                reason: {
                  type: 'list',
                  member: {}
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=800ae913a48039ce7cb5d25fa450edb671049c7c.js.map