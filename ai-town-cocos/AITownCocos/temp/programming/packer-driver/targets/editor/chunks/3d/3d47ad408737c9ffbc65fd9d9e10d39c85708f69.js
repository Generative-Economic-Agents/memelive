System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-06-28',
          endpointPrefix: 'savingsplans',
          globalEndpoint: 'savingsplans.amazonaws.com',
          jsonVersion: '1.0',
          protocol: 'rest-json',
          serviceAbbreviation: 'AWSSavingsPlans',
          serviceFullName: 'AWS Savings Plans',
          serviceId: 'savingsplans',
          signatureVersion: 'v4',
          uid: 'savingsplans-2019-06-28'
        },
        operations: {
          CreateSavingsPlan: {
            http: {
              requestUri: '/CreateSavingsPlan'
            },
            input: {
              type: 'structure',
              required: ['savingsPlanOfferingId', 'commitment'],
              members: {
                savingsPlanOfferingId: {},
                commitment: {},
                upfrontPaymentAmount: {},
                purchaseTime: {
                  type: 'timestamp'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                savingsPlanId: {}
              }
            }
          },
          DeleteQueuedSavingsPlan: {
            http: {
              requestUri: '/DeleteQueuedSavingsPlan'
            },
            input: {
              type: 'structure',
              required: ['savingsPlanId'],
              members: {
                savingsPlanId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeSavingsPlanRates: {
            http: {
              requestUri: '/DescribeSavingsPlanRates'
            },
            input: {
              type: 'structure',
              required: ['savingsPlanId'],
              members: {
                savingsPlanId: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                savingsPlanId: {},
                searchResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      rate: {},
                      currency: {},
                      unit: {},
                      productType: {},
                      serviceCode: {},
                      usageType: {},
                      operation: {},
                      properties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSavingsPlans: {
            http: {
              requestUri: '/DescribeSavingsPlans'
            },
            input: {
              type: 'structure',
              members: {
                savingsPlanArns: {
                  type: 'list',
                  member: {}
                },
                savingsPlanIds: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                states: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                savingsPlans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      offeringId: {},
                      savingsPlanId: {},
                      savingsPlanArn: {},
                      description: {},
                      start: {},
                      end: {},
                      state: {},
                      region: {},
                      ec2InstanceFamily: {},
                      savingsPlanType: {},
                      paymentOption: {},
                      productTypes: {
                        shape: 'S1e'
                      },
                      currency: {},
                      commitment: {},
                      upfrontPaymentAmount: {},
                      recurringPaymentAmount: {},
                      termDurationInSeconds: {
                        type: 'long'
                      },
                      tags: {
                        shape: 'S6'
                      },
                      returnableUntil: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSavingsPlansOfferingRates: {
            http: {
              requestUri: '/DescribeSavingsPlansOfferingRates'
            },
            input: {
              type: 'structure',
              members: {
                savingsPlanOfferingIds: {
                  shape: 'S1h'
                },
                savingsPlanPaymentOptions: {
                  shape: 'S1j'
                },
                savingsPlanTypes: {
                  shape: 'S1k'
                },
                products: {
                  shape: 'S1e'
                },
                serviceCodes: {
                  type: 'list',
                  member: {}
                },
                usageTypes: {
                  type: 'list',
                  member: {}
                },
                operations: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'S1r'
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                searchResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      savingsPlanOffering: {
                        type: 'structure',
                        members: {
                          offeringId: {},
                          paymentOption: {},
                          planType: {},
                          durationSeconds: {
                            type: 'long'
                          },
                          currency: {},
                          planDescription: {}
                        }
                      },
                      rate: {},
                      unit: {},
                      productType: {},
                      serviceCode: {},
                      usageType: {},
                      operation: {},
                      properties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSavingsPlansOfferings: {
            http: {
              requestUri: '/DescribeSavingsPlansOfferings'
            },
            input: {
              type: 'structure',
              members: {
                offeringIds: {
                  shape: 'S1h'
                },
                paymentOptions: {
                  shape: 'S1j'
                },
                productType: {},
                planTypes: {
                  shape: 'S1k'
                },
                durations: {
                  type: 'list',
                  member: {
                    type: 'long'
                  }
                },
                currencies: {
                  type: 'list',
                  member: {}
                },
                descriptions: {
                  type: 'list',
                  member: {}
                },
                serviceCodes: {
                  type: 'list',
                  member: {}
                },
                usageTypes: {
                  type: 'list',
                  member: {}
                },
                operations: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'S1r'
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                searchResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      offeringId: {},
                      productTypes: {
                        shape: 'S1e'
                      },
                      planType: {},
                      description: {},
                      paymentOption: {},
                      durationSeconds: {
                        type: 'long'
                      },
                      currency: {},
                      serviceCode: {},
                      usageType: {},
                      operation: {},
                      properties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/ListTagsForResource'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S6'
                }
              }
            }
          },
          ReturnSavingsPlan: {
            http: {
              requestUri: '/ReturnSavingsPlan'
            },
            input: {
              type: 'structure',
              required: ['savingsPlanId'],
              members: {
                savingsPlanId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                savingsPlanId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/TagResource'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S6'
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
              requestUri: '/UntagResource'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
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
          S6: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'list',
            member: {}
          },
          S1e: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'list',
            member: {}
          },
          S1r: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3d47ad408737c9ffbc65fd9d9e10d39c85708f69.js.map