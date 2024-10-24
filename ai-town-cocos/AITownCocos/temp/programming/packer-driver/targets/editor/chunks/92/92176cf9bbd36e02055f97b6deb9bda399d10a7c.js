System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-03-01',
          endpointPrefix: 'agreement-marketplace',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'Agreement Service',
          serviceFullName: 'AWS Marketplace Agreement Service',
          serviceId: 'Marketplace Agreement',
          signatureVersion: 'v4',
          signingName: 'aws-marketplace',
          targetPrefix: 'AWSMPCommerceService_v20200301',
          uid: 'marketplace-agreement-2020-03-01'
        },
        operations: {
          DescribeAgreement: {
            input: {
              type: 'structure',
              required: ['agreementId'],
              members: {
                agreementId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                acceptanceTime: {
                  type: 'timestamp'
                },
                acceptor: {
                  shape: 'S5'
                },
                agreementId: {},
                agreementType: {},
                endTime: {
                  type: 'timestamp'
                },
                estimatedCharges: {
                  type: 'structure',
                  members: {
                    agreementValue: {},
                    currencyCode: {}
                  }
                },
                proposalSummary: {
                  shape: 'Sb'
                },
                proposer: {
                  shape: 'Sg'
                },
                startTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          GetAgreementTerms: {
            input: {
              type: 'structure',
              required: ['agreementId'],
              members: {
                agreementId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                acceptedTerms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      byolPricingTerm: {
                        type: 'structure',
                        members: {
                          type: {}
                        }
                      },
                      configurableUpfrontPricingTerm: {
                        type: 'structure',
                        members: {
                          configuration: {
                            type: 'structure',
                            required: ['dimensions', 'selectorValue'],
                            members: {
                              dimensions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['dimensionKey', 'dimensionValue'],
                                  members: {
                                    dimensionKey: {},
                                    dimensionValue: {
                                      type: 'integer'
                                    }
                                  }
                                }
                              },
                              selectorValue: {}
                            }
                          },
                          currencyCode: {},
                          rateCards: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                constraints: {
                                  type: 'structure',
                                  members: {
                                    multipleDimensionSelection: {},
                                    quantityConfiguration: {}
                                  }
                                },
                                rateCard: {
                                  shape: 'Sy'
                                },
                                selector: {
                                  type: 'structure',
                                  members: {
                                    type: {},
                                    value: {}
                                  }
                                }
                              }
                            }
                          },
                          type: {}
                        }
                      },
                      fixedUpfrontPricingTerm: {
                        type: 'structure',
                        members: {
                          currencyCode: {},
                          duration: {},
                          grants: {
                            shape: 'S12'
                          },
                          price: {},
                          type: {}
                        }
                      },
                      freeTrialPricingTerm: {
                        type: 'structure',
                        members: {
                          duration: {},
                          grants: {
                            shape: 'S12'
                          },
                          type: {}
                        }
                      },
                      legalTerm: {
                        type: 'structure',
                        members: {
                          documents: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                type: {},
                                url: {},
                                version: {}
                              }
                            }
                          },
                          type: {}
                        }
                      },
                      paymentScheduleTerm: {
                        type: 'structure',
                        members: {
                          currencyCode: {},
                          schedule: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                chargeAmount: {},
                                chargeDate: {
                                  type: 'timestamp'
                                }
                              }
                            }
                          },
                          type: {}
                        }
                      },
                      recurringPaymentTerm: {
                        type: 'structure',
                        members: {
                          billingPeriod: {},
                          currencyCode: {},
                          price: {},
                          type: {}
                        }
                      },
                      renewalTerm: {
                        type: 'structure',
                        members: {
                          configuration: {
                            type: 'structure',
                            required: ['enableAutoRenew'],
                            members: {
                              enableAutoRenew: {
                                type: 'boolean'
                              }
                            }
                          },
                          type: {}
                        }
                      },
                      supportTerm: {
                        type: 'structure',
                        members: {
                          refundPolicy: {},
                          type: {}
                        }
                      },
                      usageBasedPricingTerm: {
                        type: 'structure',
                        members: {
                          currencyCode: {},
                          rateCards: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                rateCard: {
                                  shape: 'Sy'
                                }
                              }
                            }
                          },
                          type: {}
                        }
                      },
                      validityTerm: {
                        type: 'structure',
                        members: {
                          agreementDuration: {},
                          agreementEndDate: {
                            type: 'timestamp'
                          },
                          agreementStartDate: {
                            type: 'timestamp'
                          },
                          type: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchAgreements: {
            input: {
              type: 'structure',
              members: {
                catalog: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sort: {
                  type: 'structure',
                  members: {
                    sortBy: {},
                    sortOrder: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                agreementViewSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      acceptanceTime: {
                        type: 'timestamp'
                      },
                      acceptor: {
                        shape: 'S5'
                      },
                      agreementId: {},
                      agreementType: {},
                      endTime: {
                        type: 'timestamp'
                      },
                      proposalSummary: {
                        shape: 'Sb'
                      },
                      proposer: {
                        shape: 'Sg'
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              accountId: {}
            }
          },
          Sb: {
            type: 'structure',
            members: {
              offerId: {},
              resources: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    id: {},
                    type: {}
                  }
                }
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              accountId: {}
            }
          },
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                dimensionKey: {},
                price: {}
              }
            }
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                dimensionKey: {},
                maxQuantity: {
                  type: 'integer'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=92176cf9bbd36e02055f97b6deb9bda399d10a7c.js.map